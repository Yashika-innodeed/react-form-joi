import React from 'react';
import Input from './Input';
import './Input.css';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => <Input type="text" placeholder="Enter text" />;
export const Password = () => <Input type="password" placeholder="Enter password" />;
export const Default = () => <Input type="text" placeholder="Default Size" />;
export const Small = () => <Input type="text" placeholder="Small Size" size="small" />;
export const Large = () => <Input type="text" placeholder="Large Size" size="large" />;
export const WithIcon = () => <Input type="text" placeholder="" icon="🔍" />;
export const Disabled = () => <Input type="text" placeholder="Disabled Input" disabled />;
