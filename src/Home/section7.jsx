import { useEffect, useState } from "react";
import "./styles/section7.css"

function Section7(){

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
        }, 100); // Adjust the speed of the counting

        return () => {
            clearInterval(customerInterval);
            clearInterval(yearsInterval);
        };
    }, [customerCount, yearsCount]);

    return(
        <>
        <h1 style={{textAlign:"center"}}>Our partner ecosystem</h1>
        <p style={{textAlign:"center"}}>Empowering our success through the collective strength and expertise of our partner network</p>
        <br /><br />
        <h1 style={{textAlign:"center",fontWeight:"bold"}}>Why work with us?</h1>
        <section className="work">
            <div className="numbers">
                <div>
                    <h1>{customerCount}+</h1>
                    <p>customers</p>
                </div>
                <div>
                    <h1>{yearsCount}+</h1>
                    <p>years in market</p>
                </div>
                <div>
                    <h1>Best</h1>
                    <p>predictive support</p>
                </div>
                <div>
                    <h1>ISO</h1>
                    <p>process rigor & certifications</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section7