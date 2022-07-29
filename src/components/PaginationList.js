
/*import React from 'react';
 const Pagination =(props)=>{
    const pageLinks = []
    for(let i=1; i<=props.pages +1;i++){
        let active = props.CurrentPage == 1 ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={()=> props.nextPage(i)}><a href="#"></a></li>)
    }

    return(
        <div className='container'>
            <div className='row'>
                <ul className='pagination'>
                    {pageLinks}
                </ul>
            </div>
        </div>
    )
 }
 export default Pagination;
 */
import Pagination from 'react-bootstrap/Pagination';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import { Container } from 'react-bootstrap';


function AdvancedExample() {

  return (
    <Pagination className='pagination'>
      {/* <Pagination.First />
      <Pagination.Item className='path_1' id="one">{1}</Pagination.Item>
      <Pagination.Item className='path_2' id="two">{2}</Pagination.Item>
      <Pagination.Item className='path_3' id="three">{3}</Pagination.Item>
      <Pagination.Item className='path_4' id="four">{4}</Pagination.Item>
      <Pagination.Item className='path_5' id="five">{5}</Pagination.Item> */}


      <nav aria-label="...">
  <ul class="pagination"> 
    <li class="page-item active">
      <span class="page-link">
        <span class="sr-only">1</span>
      </span>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
  </ul>
</nav>


      {/* <Pagination.Item className='path_6' id="six">{6}</Pagination.Item>
      <Pagination.Item className='path_7' id="seven">{7}</Pagination.Item>
      <Pagination.Item className='path_8' id="eight">{8}</Pagination.Item>
      <Pagination.Item className='path_9' id="none">{9}</Pagination.Item>
      <Pagination.Item className='path_10' id="ten">{10}</Pagination.Item> */}

      <Pagination.Last />
    </Pagination>

    

  );

}

export default AdvancedExample;




  // <Pagination.First />
  //     <Pagination.Item className='path_1' id="one">{1}</Pagination.Item>
  //     <Pagination.Item className='path_2' id="two">{2}</Pagination.Item>
  //     <Pagination.Item className='path_3' id="three">{3}</Pagination.Item>
  //     <Pagination.Item className='path_4' id="four">{4}</Pagination.Item>
  //     <Pagination.Item className='path_5' id="five">{5}</Pagination.Item>




      
  //     <Pagination.Item className='path_6' id="six">{6}</Pagination.Item>
  //     <Pagination.Item className='path_7' id="seven">{7}</Pagination.Item>
  //     <Pagination.Item className='path_8' id="eight">{8}</Pagination.Item>
  //     <Pagination.Item className='path_9' id="none">{9}</Pagination.Item>
  //     <Pagination.Item className='path_10' id="ten">{10}</Pagination.Item>

  //     <Pagination.Last />