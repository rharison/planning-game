import './CreateRoom.css'
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Modal, Button, Text, Input } from "@nextui-org/react";

function CreateRoom() {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [votingSystem, setVotingSystem] = React.useState('fibonacci');
  const [optionVotingSystem, setOptionVotingSystem] = React.useState([
    {
      label: 'Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ? )',
      valueId: 'fibonacci',
      value: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?']
    },
    {
      label: 'Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ? )',
      valueId: 'powersOf2',
      value: ['0', '1', '2', '4', '8', '16', '32', '64', '?']
    },
  ]);

  function handleChange(event) {
    console.log(event.target.value);
    if(event.target.value === 'custom') {
      setVisibleModal(true);
    }
    setVotingSystem(event.target.value);
  }

  function closeHandler() {
    setVisibleModal(false);
  }

  return (
    <div className='container'>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visibleModal}
        onClose={closeHandler}
      >
        <Modal.Header>
        <Text id="modal-title" size={18}>
          Create custom voting system
        </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            label='Voting system name'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Enter voting system name"
          />
          <Input
            label='Voting system values'
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Enter voting system values"
            value={'1,2,3,5,8,13'}
          />
          <Button>Create</Button>
        </Modal.Body>
      </Modal>
      <FormControl fullWidth>
        <InputLabel id="select-voting-system-label">Voting system</InputLabel>
        <Select
          labelId="select-voting-system-label"
          id="select-voting-system"
          value={votingSystem}
          label="Voting system"
          onChange={handleChange}
        >
          {optionVotingSystem.map((option) => (
            <MenuItem key={option.valueId} value={option.valueId}>{option.label}</MenuItem>
          ))}
          <MenuItem key={'custom'} value={'custom'}>Custom</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}

export default CreateRoom
