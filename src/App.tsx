import { useState } from 'react'
import Layout from '@/components/Layout';
import {Button} from 'antd';
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('name')

  return (
    <div className="app">
     center
     <Button type='primary'>123</Button>
     <Layout></Layout>
    </div>
  )
}

export default App
