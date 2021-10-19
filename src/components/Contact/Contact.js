import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center fs-1 fw-bolder font-Poppins mt-5  m-3 p-4"> Contact Us </h2>

                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-8 p-4 col-sm-12">
                        <img src="https://th.bing.com/th/id/OIP.e423nC9SU8u4AtiMmdPFEgHaDL?pid=ImgDet&rs=1" width="100%" alt="" />
                    </div>

                    <div className="col-lg-8 p-4  col-sm-12 ">
                        <form action="">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Masseges</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary ">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
