import cover from '../../visual/HopeaLinja/HOPEALINJA-Image_1080.png'

export default function HopeaLinja() { 
  return (
    <div className='ProductFullPage'>
      <div className='pageBox'>
        <img src={cover} className='CAIJcover'></img>
        <h1 className="description"> {/* Fixed typo: Changed 'desicription' to 'description' */}
        With the increase in life expectancy, the number of dementia patients is forecasted to grow. This will put a strain on the rural healthcare system. Dementia can also be challenging for both the patient and their relatives especially over long distances.
        To address this problem, we design a system connecting dementia patients in remote areas with their relatives, support personnel and friends through a new synthetic audio intermediator service.
        </h1>
        <h1 className='extraInfo'>
            Partner with
            <a className='link'>The Nordic Council of Ministers and Region Västerbotten&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
            Year
            <a className='link'>2022</a> 
        </h1>  
      </div>
    </div>
  );
}
