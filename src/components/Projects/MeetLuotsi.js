import cover from '../../visual/MeetLuotsi/espoo_senioripaku_hiirisuon_asukaspuisto_2024_Kerttu_Penttila-HIRES-45.jpg'

export default function MeetLuotsi() { 
  return (
    <div className='ProductFullPage'>
      <div className='pageBox'>
        <img src={cover} className='MLcover'></img>
        <h1 className="description"> {/* Fixed typo: Changed 'desicription' to 'description' */}
        Senioripaku (translating to ‘Senior Van’) lunched in 2022 organises activities for senior citizens at multiple locations in Espoo, offering guidance, physical exercise and arts and culture talks. As part of the Designing for Services course 2022 in Aalto university and in collaboration with the City of Espoo, we aimed to promote the serivce with participatory approaches.
        </h1>
        <h1 className='extraInfo'>
            Partner with
            <a className='link'>City of Espoo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
            Year
            <a className='link'>2022</a> 

        </h1>  
      </div>
    </div>
  );
}
