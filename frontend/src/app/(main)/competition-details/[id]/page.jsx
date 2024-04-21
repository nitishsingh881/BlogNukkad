'use client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CompetitionDetails = () => {

  const { id } = useParams();
  // console.log(id);
  const [competitionData, setCompetitionData] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [selBlog, setSelBlog] = useState(null);
  const [blogList, setBlogList] = useState([]);

  const fetchUserBlogs = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/getbyuser`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setBlogList(data);
        if (data === null) {
          toast.error('You have not written any blogs yet');
        } else {
          return data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const fetchCompetitionData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/competition/getbyid/${id}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCompetitionData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCompetitionData();
    fetchUserBlogs();
  }, [])

  const attemptParticipate = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/participation/getbyuser`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        if (data === null) {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/participation/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': currentUser.token
            },
            body: JSON.stringify({
              blog: selBlog,
              competition: id
            })
          })
            .then((response) => {
              if (response.status === 200) {
                toast.success('Participation Successful');
                return response.json();
              }
            })
            .then(data => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          toast.error('You have already participated in this competition');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const displayCompetition = () => {
    if (competitionData !== null) {
      return <>
        <header className='py-6 bg-white'>
          <h1 className='text-3xl text-red-700 text-center'>{competitionData.topic}</h1>
        </header>
        <div>

          <select onChange={e => setSelBlog(e.target.value)} className=''>
            <option value="">Select Blog</option>
            {blogList.map((blog) => {
              return <option value={blog._id}>{blog.title}</option>
            })}
          </select>
          {
            checkCompetionExpired() ? displayWinner() :
              (
                <button onClick={attemptParticipate}>Participate in Compeition</button>
              )
          }

        </div>
      </>
    } else {
      return <p>Competition Loading...</p>
    }
  }

  const checkCompetionExpired = () => {
    const currentDate = new Date();
    const endDate = new Date(competitionData.endDate);
    if (currentDate > endDate) {
      return true;
    } else {
      return false;
    }
  }

  const displayWinner = () => {

    return <div>
      <h3>Competition Over</h3>
      {
        competitionData.winner ? <p>Winner: {competitionData.winner.name}</p> : <p>Result not declared Yet</p>
      }
    </div>
  }

  return (
    <div className='pt-40'>
      {displayCompetition()}
    </div>
  )
}

export default CompetitionDetails