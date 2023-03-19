import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import Layout from '../Layouts/Layout'



export const Home = () => {
 const navigate= useNavigate()



    useEffect(()=>{
      navigate("/category/all/640cce9b0cc3d769e224f41d")

    },[navigate])


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

