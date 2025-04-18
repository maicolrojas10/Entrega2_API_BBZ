import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CustomCard.css';

const CustomCard = ({ user, showFullDetails = false }) => {
  // Si no está en detalles, que sea link a los detalles
  const content = (
    <Card className="card-container" style={{ cursor: showFullDetails ? 'default' : 'pointer' }}>
      <div className="card-image">
        <CardMedia
          component="img"
          image={user.image}
          alt={user.name}
        />
      </div>

      <CardContent className='card-content'>
        <Typography variant="h6" className="card-title">
          {user.name}
        </Typography>

        <Typography variant="body2" className="card-subtitle">
          {user.race} - {user.gender}
        </Typography>

        {showFullDetails && (
          <>
          <div className="card-details">
          <Typography variant="body2" color="gold">
             <h4>
             Base Kit: 
              </h4> 
              {user.ki}
            </Typography>
            <Typography variant="body2" color="gold">
             <h4>
              Total Kit:
             </h4>
              {user.maxKi}
            </Typography>
            <Typography variant="body2" color="Gold">
            <h4>
              Afiliacion:
             </h4>
             {user.affiliation}
            </Typography>


          </div>
           
          </>
        )}
      </CardContent>
    </Card>
  );

  return showFullDetails ? content : <Link to={`/details/${user.id}`} style={{ textDecoration: 'none' }}>{content}</Link>;
};

export default CustomCard;
