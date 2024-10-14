 import Image from "next/image"
export default  function Home (){
return(
  <main className="bg-red-400">
    <section className="flex justify-between">
      <div className="flex">

    <h1 className=" mt-40 text-6xl font-extrabold"> HAPPY BIRTHDAY To You
    
    </h1>
 

    </div>
     <div className=" mt-2 mr-6 flex">
      <Image width={500} height={500} src="/zahra.jpg" alt="cake"/>
      </div>
      
      
     
    
      </section>
      
      <h1 className="  mt-0 text-6xl font-extrabold"> ZAHRA QURESHI </h1>


  
        </main>
     
)
}