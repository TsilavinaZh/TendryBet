
import React from 'react';
import { Card } from 'antd';

const AviatorCard = ({ backgroundImage, title, link }) => {
  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        style={{
          width: 300,
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
        cover={
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          />
        }
      >
        <Card.Meta title={title} style={{ fontSize: '18px', fontWeight: 'bold' }} />
      </Card>
    </a>
  );
};

export default AviatorCard;
