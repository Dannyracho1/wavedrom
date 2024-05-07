{signal: [
  //{name: 'clk'			, wave: 'p..............'},
  {name: 'I_regAdress'	, wave: 'x2..........|..x', data: ['0x60 = 0b0110_0000']},
  {name: 'I_newDataFlag', wave: '01..........|..x'},
  {name: 'I_data'		, wave: 'x2..........|..x', data: ['0xFFFF']},
  {name: 'I_actPLL'		, wave: 'x2..........|..x', data: ['0x01 = 0b0000_0001']},
  {name: 'O_SCK'		, wave: 'p...........|..x'},
  {name: 'O_SDI'		, wave: 'x01.0....1..|..x', data: ['1']},
  //{name: 'O_SDI'		, wave: 'xhpHplnLn', data: ['1']},
  {name: 'O_CSB'		, wave: 'x2..........|..x', data: ['0xFE = 0b1111_1110']},
  //{},
  //{name: 'ack'			, wave: '1.....|01.'}
]}
