import React from 'react';
import './donorlist.css';

const donorlist = () => {
  return (
    <div className='tablee container'>
      <table>
        <thead>
          <tr className='table-col'>
            <th>Name of Donor</th>
            <th>Amount of Donation (Indian rupees)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name of Donor">PATHIK RAMESH JUTHANI</td>
            <td data-label="Amount of Donation (Indian rupees)">10,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">RAHUL V JAIN</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">Smrita Paarekh</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">Shyam Meena</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">Virendra Dani</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">Hritik Roshan</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
          <tr>
            <td data-label="Name of Donor">Neha Agrawal</td>
            <td data-label="Amount of Donation (Indian rupees)">5,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default donorlist;
