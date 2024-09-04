import cover from '../../visual/Panorama/slsecting.png'

export default function Panorama() { 
  return (
    <div className='ProductFullPage'>
      <div className='pageBox'>
        <img src={cover} className='CAIJcover'></img>
        <h1 className="description"> {/* Fixed typo: Changed 'desicription' to 'description' */}
        Panorama is a device management system designed to enhance the working conditions of field engineers at GE HealthCare by providing an overview of the current fleet status. In the revamped service workflow, field engineers can remotely access various medical devices and perform tasks with precision.

        </h1>
        <h1 className='extraInfo'>
            Partner with
            <a className='link'>GE Healthcare&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
            Year
            <a className='link'>2023</a> 

        </h1>  
      </div>
    </div>
  );
}
