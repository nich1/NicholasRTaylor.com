export default function ContactForm() {
    return (
       
            
                <div className=" flex justify-center  w-full my-16 min-w-full text-center">
                    <div className=" h-60 rounded-lg  w-4/5 text-4xl  pt-3 bg-slate-800 shadow-2xl text-left  ">
                             
                            <div className="text-black  px-8">
                                Schedule A Call With Me:
                                <form action="">
                                    <div className="py-4">
                                        <label  className="pr-4" htmlFor="name">Name:</label>
                                        <input type="text" id="name" />
                                        <label  className="px-4" htmlFor="name">Email:</label>
                                        <input type="text" id="name" />
                                    </div>
                                    <div>
                                        <label  className="pr-4" htmlFor="name">Subject:</label>
                                        <input type="text" id="name" />
                                        <label  className="px-4" htmlFor="name">Day</label>
                                        <input type="text" id="name" />
                                    </div>
                                    
                                    
                                </form>
                            </div>
                    </div>
                </div>
            
        
    )
}