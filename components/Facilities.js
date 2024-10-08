import React, { Component } from 'react';
import Facilitiesitem from './Facilitiesitem';

export class Facilities extends Component {
  labs = [
    {
      "name": "VLSI",
      "description": "This lab provides hands-on experience in Very Large Scale Integration (VLSI) design, enabling students to design and simulate complex integrated circuits.",
      "equipments": [
        "Simulation Tools (Xilinx)",
        "FPGA Trainer Kit",
        "CPLD Trainer Kit"
      ],
      "imgUrl": "https://ymtsindia.com/assets/img/services/vlsi.webp"
    },
    {
      "name": "Microprocessor & Computer Organization",
      "description": "In this lab, students learn about the architecture, design, and operation of microprocessors, and how they interact with other components in computer systems.",
      "equipments": [
        "Pentium-3 Server Acer Model AA350",
        "IBM RISC RS-6000 Model 240 (AIX 4.3)",
        "IBM X-series 205 E-Servers",
        "H.P. Net Server E200 P-3"
      ],
      "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-IZmvzSRRso7AakTA6xMeOHkVShdebwKNTw&s"
    },
    {
      "name": "Computer Graphics & Vision",
      "description": "This lab focuses on computer graphics techniques and computer vision algorithms, allowing students to create visual simulations and process images.",
      "imgUrl": "https://ymtsindia.com/assets/img/services/vlsi.webp"
    }
  ];

  constructor() {
    super();
    this.state = {
      labs: this.labs,
      loading: false
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Facilities</h2>
        <div className="row">
          {this.state.labs.map((lab, index) => (
            <div className="col-md-4 p-2" key={index}>
              <Facilitiesitem 
                title={lab.name} 
                description={lab.description} 
                imgUrl={lab.imgUrl || "https://via.placeholder.com/150"} // Provide a fallback image URL if imgUrl is missing
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Facilities;
