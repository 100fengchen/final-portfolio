import cover from '../../visual/CreatingAnInfromedJourney/DfGcover.png'

export default function CreatingAnInformedJourney() { 
  return (
    <div className='ProductFullPage'>
      <div className='pageBox'>
        <img src={cover} className='CAIJcover'></img>
        <h1 className="description"> {/* Fixed typo: Changed 'desicription' to 'description' */}
            Creating an informed journey is a collaborative project with the Finnish Ministry of Transport and Communications (LVM) aimed at addressing the vision of the National Transport System Plan 2021-2032 to promote Finland’s (transportation) competitiveness. In this project, we were tasked with defining the Accessible Travel Chain and envisioning how it will be presented to the public, taking into account the diverse needs of various actors.
        </h1>
        <h1 className='extraInfo'>
            Partner with
            <a className='link'>Finnish Ministry of Transport and Communications (LVM)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
            Year
            <a className='link'>2023</a> 
        </h1>  
      </div>
    </div>
  );
}
