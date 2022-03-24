import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-heading'>
                <h5 className='contact-title'>Contact Us</h5>
                <p className='contact-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam minima nisi. Esse blanditiis saepe itaque sunt porro dolores inventore!</p>
            </div>

            <div className='contact-form-container'>
                <form>
                    <div className='inputbox'>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id='fname' name='fname' />
                    </div>
                    <div className='inputbox'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id='lname' name='lname' />
                    </div>
                    <div className='inputbox'>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id='email' name='email' />
                    </div>
                    <div className='inputbox'>
                        <label htmlFor="company">company name</label>
                        <input type="text" id='company' name='company' />
                    </div>

                    <div className='inputbox'>
                        <label for="category">Client category</label>

                        <select id="category" name="category">
                            <option value="volvo">Volvo XC90</option>
                            <option value="saab">Saab 95</option>
                            <option value="mercedes">Mercedes SLK</option>
                            <option value="audi">Audi TT</option>
                        </select>
                    </div>

                    <div className='inputbox'>
                        <h3 className='services-interest' >Services of interest</h3>
                        <div className='checkbox-container'>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="marketmaking" id="marketmaking" />
                                <label htmlFor="marketmaking">crypto market making</label>
                            </div>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="liquidity" id="liquidity" />
                                <label htmlFor="marketmaking">crypto liquidity making</label>
                            </div>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="trading" id="trading" />
                                <label htmlFor="marketmaking">otc trading</label>
                            </div>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="algotrading" id="algotrading" />
                                <label htmlFor="marketmaking">algorithmic trading</label>
                            </div>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="risk" id="risk" />
                                <label htmlFor="marketmaking">risk management</label>
                            </div>
                            <div className='checkbox-options'>
                                <input type="checkbox" name="hedging" id="hedging" />
                                <label htmlFor="marketmaking">miner hedging</label>
                            </div>
                        </div>


                    </div>

                    <p>AlphaStack Products and Services are available to select qualified institutional investors and accredited individuals <br />
                        (a) who have assets equal to or greater than $10mm (including digital currency holdings, as applicable) and <br />
                        (b) who are interested in <br />
                        (i) trading amounts equivalent to at least USD $250,000 (whether in cash or digital assets) per transaction, or <br />
                        (ii) lending or borrowing at least 100 BTC, 1,000 ETH or USD $2,000,000, whether in cash or stablecoins.</p> <br />

                    <div className='inputbox'>
                        <label htmlFor="help">How can we help you: </label>
                        <textarea name="clienttext" id="clienttext" cols="30" rows="10"></textarea>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact