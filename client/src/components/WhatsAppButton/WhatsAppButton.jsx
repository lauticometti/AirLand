import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css'

export function WhatsAppButton () {
  return (
    <a href="https://api.whatsapp.com/send?phone=1164602560&text=Hi!+I+need+more+information+about..." className={styles.whatsapp_float} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
};

