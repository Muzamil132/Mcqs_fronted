import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../Layouts/Layout'
// import { register} from '../Reducers/registerState'
import { useAppDispatch, useAppSelector } from '../selector'

export const Home = () => {

  // const {profile}= useAppSelector((state)=>state)
  const dispatch = useAppDispatch()
  


  return (
    <div>
        <Layout>
          <Link to="/questions/add">
            Add Question
          </Link>
           
        </Layout>
    </div>
  )
}

