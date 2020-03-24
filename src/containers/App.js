import React,{useEffect,useState} from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import {Card,Container,Col,Row,Form,Button } from 'react-bootstrap'
import { getNews,} from '../redux/actions/news';



function getSearchNews(search) {
    console.log(search,"inside")
    return state => {
        console.log(state,"state")
        const Alldata = state || {} ;
        const somedata = Alldata.news || {}
        let finalnews = somedata.news || []
       
        finalnews = search && typeof search === 'string' && finalnews && finalnews.length ? finalnews.filter(item => item.title.toUpperCase().includes(search.toUpperCase())) : finalnews;
        return finalnews
        
    }
}


function App() {
    const [search,setSearch] = useState('')
    const [data,setData] = useState()
    const dispatch =  useDispatch();
    useEffect(()=>{
        dispatch(getNews())
    },[])
    const finalnews = useSelector(getSearchNews(search));
    // const news = searchNews.news
    // console.log(news,"news")

    function onClick(url) {
        window.open(url,"_blank")
    }

    function onChangeSearch(e) {
        const {value} = e.target
        setSearch(value)

    }
    
    return (
        <div>
            <Container className="mt-2">
                <Row>
                    <Col xs={12} sm={12} md={8} xl={8}  >
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="search" placeholder="search" onChange={onChangeSearch}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={2} xl={2}>
                    </Col>
                    <Col md={2} xl={2}>
                        <Button variant="outline-primary" >Search</Button>{' '}
                    </Col>
                    
                    <Col xs={12} sm={12} md={12} xl={12}>
                    {
                        finalnews   .map((value=> 
                            <Card style={{flex:1,flexDirection:'row',cursor:'pointer'}} onClick={()=>onClick(value.url)}>
                                <Card.Body>{value.time_ago}</Card.Body>
                                <Card.Body>{value.title}</Card.Body>
                            </Card>
                        ))
                    }
                    </Col>
                </Row>
            </Container>

         
        </div>

    )
}

export default App