import './styles.css'
import poster from '../../assets/img/pandora.jpg'



function DescriptionCard() {
    return (
        <>
            <div className="description-card">
                <ul>
                    <li><strong>Name:</strong> Pandora </li>
                    <li><strong>Language:</strong> Pandora </li>
                    <li><strong>Genres:</strong> Pandora </li>
                    <li><strong>Premiered:</strong> Pandora </li>
                    <li><strong>Status:</strong> Pandora </li>
                    <li><strong>Summary:</strong> Set in utopian Piltover and the oppressed
                        underground of Zaun, the story follows the origins of two iconic League champions — and the power that will tear them apart.
                    </li>
                </ul>
                <img src={poster} height="280" />
            </div>
            <div className="description-btn-conteiner">
            </div>
        </>
    )
}

export default DescriptionCard