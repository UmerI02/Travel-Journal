import CardData from '../data'
import Card from './cards'

export default function Mapper(){
    const displaycard=CardData.map(mydata=>{return <Card
    key={mydata.id}
    {...mydata}
    />})
    return(
        <div>
        {displaycard}
        </div>
    )
}