'use client';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast'


const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(20, 'Too long'),
  email: Yup.string()
    .email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(20, 'Too long')
    .required('Password is required').matches(/[A-Z]/, 'password must contain uppercase letters')
    .matches(/\W/, 'Password must contain special characters'),
  cpassword: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    avatar:Yup.string().required('Required')
})


const Signup = () => {
 const router=useRouter();
  //step1 : formik initialization
  const SignupForm = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    created:'',
    avatar:''
    },
    onSubmit: async (values, action) => {

      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      console.log(res.status)
      action.resetForm();

      if (res.status === 200) {
       toast.success("Signup successfull")
       router.push('/login');
      } else {
       
        toast.error("failed")

      }
    },
    validationSchema: SignupSchema
  })

  return (
    <>




        <a
          href="#"
          className="flex flex-col items-center bg-transparent py-5 px-16   rounded-lg shadow-2xl md:flex-row md:max-w-xxl hover:bg-purple-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
            alt=""
          />
          <div className="flex flex-col  justify-between  p-4 leading-normal">
            <h5 className="mb-2 text-3xl  font-serif  font-bold tracking-tight text-purple-500 dark:text-white">
              Create a new account
            </h5>
            <form className="md:w-64" onSubmit={SignupForm.handleSubmit}>
              {/* <div className="mb-5">

                <input
                  type="file"
                  id="avatar"
                  className="bg-gray-50  text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="avatar"
                  required=""
                  onChange={SignupForm.handleChange}
                  value={SignupForm.values.avatar}
                />
                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.avatar && SignupForm.errors.avatar}</span>

              </div> */}
              <div className="mb-5">

                <input
                  type="text"
                  id="username"
                  className="bg-gray-50  text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required=""
                  onChange={SignupForm.handleChange}
                  value={SignupForm.values.username}
                />
                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.username && SignupForm.errors.username}</span>

              </div>

              <div className="mb-5">

                <input
                  type="email"
                  id="email"
                  className="bg-gray-50  text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  required=""
                  onChange={SignupForm.handleChange}
                  value={SignupForm.values.email}
                />
                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.email && SignupForm.errors.email}</span>

              </div>
              <div className="mb-5">

                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  placeholder="password"
                  onChange={SignupForm.handleChange}
                  value={SignupForm.values.password}
                />
                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.password && SignupForm.errors.password}</span>

              </div>
              <div className="mb-5">

                <input
                  type="password"
                  id="cpassword"
                  className="bg-gray-50  text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="confirm password"
                  required=""
                  onChange={SignupForm.handleChange}
                  value={SignupForm.values.cpassword}
                />
                <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{SignupForm.touched.cpassword && SignupForm.errors.cpassword}</span>

              </div>
           
              <button
                type="submit"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-1 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 text-lg"
              >
                Submit
              </button>
            </form>

          </div>
        </a>

    </>
  )
}

export default Signup