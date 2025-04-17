import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CustomCard.css';

const CustomCard = ({ user }) => {
  return (
    <Card className="card-container">
      <CardMedia
        component="img"
        image={user.image}
        alt={user.name}
        className="card-image"
      />
      <CardContent>
        <Typography variant="h6" className="card-title">
          {user.name}
        </Typography>

        <Typography variant="body2" className="card-subtitle">
          {user.race} - {user.gender}
        </Typography>

        <Typography variant="body2" className="card-ki">
          <h4>
            Base KI:
          </h4>
          {user.ki}
        </Typography>

        <Typography variant="body2" className="card-ki">
          <h4>
            Total KI:
          </h4>{user.maxKi}
        </Typography>

        <Typography variant="body2" className="card-affiliation">
          <h4>
            Afiliation
          </h4> {user.affiliation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
