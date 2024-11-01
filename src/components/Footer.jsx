
import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const AppFooter = ({ darkMode }) => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: darkMode ? '#333' : '#f0f2f5', padding: '20px', color: darkMode ? '#fff' : '#000' }}>
      <Row justify="space-around" align="middle">
        <Col>
          <p>&copy; {new Date().getFullYear()} TsilavinaZH.</p>
        </Col>
        <Col>
          <a href="mailto:tsiory.aina69t@gmail.com" style={{ color: darkMode ? '#fff' : '#000' }}>Contact</a>
        </Col>
        <Col>
          <a href="/conditions" style={{ color: darkMode ? '#fff' : '#000' }}>Conditions d'utilisation</a>
        </Col>
        <Col>
          <a href="/privacy" style={{ color: darkMode ? '#fff' : '#000' }}>Politique de confidentialité</a>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
