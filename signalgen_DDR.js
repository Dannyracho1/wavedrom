{
  "signal": [
    {"name": "w_clk",     		"wave": "p..PpPPp.........x"},
    {"name": "divisor", 		"wave": "x2...............x", "data": "100"},
    //{"name": "w_clk",   		"wave": "0.10..0.1.0."},
    {"name": "I_mode",  		"wave": "x22....222.......x", "data": "00 02 00 02 01"},
    {"name": "I_dataLength",	"wave": "x2.22222.........x", "data": "001 002 003 004 005 006"},
    {"name": "I_Idata",  		"wave": "x2.22222.........x", "data": ["001", "002", "003", "004", "080", "0F0"]},
    {"name": "I_Qdata",  		"wave": "x2.22222.........x", "data": ["002", "003", "004", "005", "080", "0F0"]},
    {"name": "I_QdataReady", 	"wave": "0.h.lp.lpl.......x"},
    {"name": "edge_detected",	"wave": "0..plp.l.........x"},
    {"name": "O_DAC_I",  		"wave": "x2.......2222..22x", "data": ["000", "001", "003", "004", "000", "001", "003", "004"]},
    {"name": "O_DAC_Q",  		"wave": "x2.......2222..22x", "data": ["000", "002", "004", "005", "000", "002", "004", "005"]},
  ],
  "config": { "hscale": 1 },
  "head": {
    //"text": "WaveDrom Example: ModelSim Timing Diagram",
    //"tick": 0,
    //"tock": -1
  },
  "foot": {
    //"text": "Generated Diagram",
    //"tock": 9
  }
}