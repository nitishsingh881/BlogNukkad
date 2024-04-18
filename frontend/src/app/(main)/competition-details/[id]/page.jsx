'use client';
import { useParams } from 'next/navigation'
import React from 'react'

const CompetitionDetails = () => {

  const {id} = useParams();
  console.log(id);

  const fetchCompetitionData = () => {
    
  }

  return (
    <div>CompetitionDetails</div>
  )
}

export default CompetitionDetails