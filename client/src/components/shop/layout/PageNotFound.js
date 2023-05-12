import React from "react";
import Layout from "./index";
import './PageNotFound.css';
const PageNotFoundComponent = (props) => {
  return (
    <center>
    <div className="container" style={{display:'inline-block', marginTop:'10%'}}>
    <div className="row" style={{dispay:"flex",flex:"space-around"}}>
      <div className="flex flex-col  my-32 col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/937063796/photo/close-up-of-a-woman-hands-repairing-computer.jpg?b=1&s=170667a&w=0&k=20&c=38-YsZX0FKKcCW4lvKEkTEPZKunOFUpdS02f_ZaluE8=" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>Motherboard Services</b></h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col  my-32 col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/1144570782/photo/pcb-layout-repairing-technician-soldering-laptop.jpg?b=1&s=170667a&w=0&k=20&c=Y2msomIQehHcR0DiEV4L0E4IN-lEzJ3M6OizENBe3DY=" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>Hardware Services</b></h4>
          </div>
        </div>
      </div>
      <div className="flex my-32 col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/1144604134/photo/malware-detected-warning-screen.jpg?b=1&s=612x612&w=0&k=20&c=eivxSHNfCqiT6GyjCcnWO9kYGFtbLOyOjcy1NjM6F9s=" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>Virus/malware attack</b></h4>
          </div>
        </div>
      </div>
      <div className="flex my-32 col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/622912100/photo/broken-computer-disassembling-close-up.jpg?b=1&s=612x612&w=0&k=20&c=0UUxQZKJzhDf_yiJmO9jZJ08RbLy9O9KtH9fZCAwHLA=" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>Broken Computer disassembling</b></h4>
          </div>
        </div>
      </div>
      <div className="flex my-32 col-md-4">
        <div class="card">
          <img src="https://media.istockphoto.com/id/862302786/photo/man-repairing-toner-for-laser-printer.jpg?b=1&s=612x612&w=0&k=20&c=c1xCrDaTHXx9DyAxHiu_jRUA_muH9gmmOwyXc5q7lKo=" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>Printer Services</b></h4>
          </div>
        </div>
      </div>
      <div className="flex my-32 col-md-4">
        <div class="card">
          <img src="https://static3.bigstockphoto.com/4/9/2/large1500/294029662.jpg" alt="Avatar" style={{width:'100%'}}/>
          <div class="container">
           <h4 style={{textAlign:'center'}}><b>OS Updates</b></h4>
          </div>
        </div>
      </div>
    </div>
    </div>
    </center>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
