 
  import cover from '../../visual/SpotOn/compoenet-02.jpg'

  export default function SpotOn() { 
    return (
      <div className='ProductFullPage'>
        <div className='pageBox'>
          <img src={cover} className='SpotOnCover'></img>
          <h1 className="description"> {/* Fixed typo: Changed 'desicription' to 'description' */}
          Spot On is a space booking system that employs light as an indicator for multiple purposes with seamless integration of virtual and physical elements. Through dynamic color changes within the booking application, users can effortlessly discern whether a space is occupied or if the current occupant invites others to join their session.          </h1>
          <h1 className='extraInfo'>
          Year
            <a className='link'>2023</a> 
 
              {/* <a href="https://lvm.fi/en/home" target="_blank" rel="noopener noreferrer" className='link'>Finnish Ministry of Transport and Communications (LVM) </a>  */}
          </h1>  
        </div>
      </div>
    );
  }
  