import { useEffect, useState } from "react";
import "./style.scss"; // This will contain custom gradient border CSS

function Counter() {
    const [customerCount, setCustomerCount] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);

    useEffect(() => {
        // Animate customer count
        const customerInterval = setInterval(() => {
            if (customerCount < 300) {
                setCustomerCount(prev => prev + 1);
            } else {
                clearInterval(customerInterval);
            }
        }, 10); // Adjust the speed of the counting

        // Animate years count
        const yearsInterval = setInterval(() => {
            if (yearsCount < 30) {
                setYearsCount(prev => prev + 1);
            } else {
                clearInterval(yearsInterval);
            }
        }, 10); // Adjust the speed of the counting

        return () => {
            clearInterval(customerInterval);
            clearInterval(yearsInterval);
        };
    }, [customerCount, yearsCount]);

    return (
        <>
        <br />
    <h1 className="text-center font-bold">Why work with us?</h1>
            <section className="work ms-5 mt-5" style={{height:"300px"}}>
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-lg mx-auto">
                    
                    <div className="animb" style={{height:"205px",width:"205px"}}>

                    <div className="flex flex-col items-center   w-48 h-48 justify-center" style={{border:"9px solid #EEEEEE"}}>
                        <h1 className="text-3xl font-bold">{customerCount}+</h1>
                        <p>customers</p>
                    </div>
                    </div>
                   <div className="animb" style={{height:"205px",width:"205px"}}>

                    <div className="flex flex-col items-center  w-48 h-48 justify-center" style={{border:"9px solid #EEEEEE"}}>
                        <h1 className="text-3xl font-bold">{yearsCount}+</h1>
                        <p>years in market</p>
                    </div>
                   </div>

                   <div className="animb" style={{height:"205px",width:"205px"}}>

                    <div className="flex flex-col items-center  w-48 h-48 justify-center" style={{border:"9px solid #EEEEEE"}}> 
                        <h1 className="text-3xl font-bold">Best</h1>
                        <p>predictive support</p>
                    </div>

                   </div>
                    <div className="animb" style={{height:"205px",width:"205px"}}>
                    <div className="flex flex-col items-center  w-48 h-48 justify-center" style={{border:"9px solid #EEEEEE"}}>
                        <h1 className="text-3xl font-bold">ISO</h1>
                        <p style={{textAlign:"center"}}>process rigor & certifications</p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter;
