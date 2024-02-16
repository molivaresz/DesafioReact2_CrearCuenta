import Card from 'react-bootstrap/Card';
import MyTags from './Tags'

const Alert = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='imgdog' variant="top" src={props.dirimgdog} />
            <Card.Body className='cardbody'>
                <Card.Title>{props.namedog}</Card.Title>
                <Card.Text>{props.descriptiondog}</Card.Text>
            </Card.Body>
            <MyTags 
            dogbreed={props.dogbreed}
            badgecolor={props.badgecolor}
            />
        </Card>
        </>
    )
}

    export default Alert