import React, { useState } from 'react';
import { Plus, Trash2, Copy, X, Upload, Send, ArrowLeft, Download, ClipboardCopy, Check, Users, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_SCHEDULES = [
  {id:1,label:"Week of Jan 5, 2026",published:false,stJosephEmployees:[{id:1.01,name:"Angie",schedule:{Wednesday:"7pm-12:15am"}},{id:1.02,name:"Cassie",schedule:{Thursday:"7pm-12:15am",Friday:"4pm-12:30am",Saturday:"3-7pm"}},{id:1.03,name:"Derek",schedule:{Sunday:"5:30-12:15am"}},{id:1.04,name:"Ella",schedule:{Sunday:"7pm-12:15am"}},{id:1.05,name:"Franco",schedule:{Wednesday:"4pm-12:15am",Thursday:"10am-5:30pm"}},{id:1.06,name:"Josh",schedule:{Tuesday:"6pm-12:15am",Saturday:"5:30-12:15am"}},{id:1.07,name:"Kalvin",schedule:{Thursday:"5:30-12:15am",Sunday:"10am-5:30pm"}},{id:1.08,name:"Matthew",schedule:{}},{id:1.09,name:"Peter",schedule:{Monday:"5pm-12:15am",Saturday:"10am-5:30pm"}},{id:1.10,name:"Richard",schedule:{Tuesday:"2pm-6pm",Friday:"5pm-12:30am"}},{id:1.11,name:"Shaun",schedule:{Tuesday:"10am-5pm",Wednesday:"10am-5pm"}},{id:1.12,name:"Simon",schedule:{Tuesday:"7pm-12:15am",Sunday:"3pm-7pm"}},{id:1.13,name:"Tim",schedule:{Monday:"7pm-12:15am",Saturday:"7pm-12:15am"}},{id:1.14,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}}],collegeParkEmployees:[{id:1.51,name:"Alida",schedule:{Saturday:"6pm-11:15pm"}},{id:1.52,name:"Angie",schedule:{Monday:"5pm-11:15pm"}},{id:1.53,name:"Annabel",schedule:{Saturday:"10am-5pm",Sunday:"10am-5pm"}},{id:1.54,name:"Brianna",schedule:{Tuesday:"5pm-11:15pm",Wednesday:"5pm-11:15pm",Sunday:"6pm-11:15pm"}},{id:1.55,name:"Cici",schedule:{Saturday:"2pm-6pm",Sunday:"2pm-6pm"}},{id:1.56,name:"Derek",schedule:{Monday:"4pm-11:15pm",Friday:"5:30pm-11:15pm",Saturday:"5pm-11:15pm"}},{id:1.57,name:"Ella",schedule:{Thursday:"5pm-11:15pm"}},{id:1.58,name:"Franco",schedule:{Tuesday:"10am-5pm"}},{id:1.59,name:"Josh",schedule:{Thursday:"5pm-11:15pm",Friday:"3pm-11:15pm"}},{id:1.60,name:"Kalvin",schedule:{Wednesday:"5pm-11:15pm"}},{id:1.61,name:"Peter",schedule:{Wednesday:"10am-5pm",Friday:"10:30am-3pm",Sunday:"5pm-11:15pm"}},{id:1.62,name:"Shaun",schedule:{Monday:"10am-5pm"}},{id:1.63,name:"Tim",schedule:{}},{id:1.64,name:"Wilson",schedule:{Thursday:"10am-5pm"}}]},
  {id:2,label:"Week of Jan 12, 2026",published:false,stJosephEmployees:[{id:2.01,name:"Angie",schedule:{}},{id:2.02,name:"Annabel",schedule:{Sunday:"5:30-12:15am"}},{id:2.03,name:"Cassie",schedule:{Wednesday:"7pm-12:15pm",Saturday:"6pm-12:15am"}},{id:2.04,name:"Cici",schedule:{Saturday:"12-6pm"}},{id:2.05,name:"Derek",schedule:{Thursday:"5:30-12:15am",Sunday:"7pm-12:15am"}},{id:2.06,name:"Ella",schedule:{Monday:"7pm-12:15pm"}},{id:2.07,name:"Franco",schedule:{Tuesday:"5pm-12:15am",Thursday:"10am-5:30pm"}},{id:2.08,name:"Josh",schedule:{Wednesday:"5:30-12:15am",Friday:"10am-5:30pm",Saturday:"5:30-12:15am"}},{id:2.09,name:"Kalvin",schedule:{Saturday:"12-5:30pm"}},{id:2.10,name:"Matthew",schedule:{Sunday:"10am-5:30pm"}},{id:2.11,name:"Peter",schedule:{Monday:"5pm-12:15am",Tuesday:"10am-5pm",Wednesday:"10am-5:30pm"}},{id:2.12,name:"Richard",schedule:{Friday:"5:30-12:15am"}},{id:2.13,name:"Shaun",schedule:{}},{id:2.14,name:"Simon",schedule:{Tuesday:"7pm-12:15pm",Thursday:"7pm-12:15pm",Sunday:"2pm-7pm"}},{id:2.15,name:"Tim",schedule:{Friday:"7pm-12:15am"}},{id:2.16,name:"Wilson",schedule:{Monday:"10am-5pm"}}],collegeParkEmployees:[{id:2.51,name:"Angie",schedule:{Monday:"5pm-11:15pm"}},{id:2.52,name:"Annabel",schedule:{Tuesday:"5pm-11:15pm",Wednesday:"10am-7pm"}},{id:2.53,name:"Brianna",schedule:{Saturday:"3pm-11:15pm"}},{id:2.54,name:"Cassie",schedule:{Friday:"5pm-11:15pm",Sunday:"3pm-11:15pm"}},{id:2.55,name:"Derek",schedule:{Monday:"4pm-11:15pm",Saturday:"5pm-11:15pm"}},{id:2.56,name:"Ella",schedule:{Tuesday:"5pm-11:15pm",Thursday:"5pm-11:15pm"}},{id:2.57,name:"Franco",schedule:{Saturday:"10am-5pm"}},{id:2.58,name:"Josh",schedule:{Sunday:"5pm-11:15pm"}},{id:2.59,name:"Kalvin",schedule:{Wednesday:"7pm-11:15pm",Friday:"5pm-11:15pm"}},{id:2.60,name:"Peter",schedule:{Thursday:"5pm-11:15pm",Friday:"10am-5pm"}},{id:2.61,name:"Richard",schedule:{Tuesday:"10am-5pm",Sunday:"10am-5pm"}},{id:2.62,name:"Shaun",schedule:{Monday:"10am-5pm"}},{id:2.63,name:"Tim",schedule:{Wednesday:"7pm-11:15pm"}},{id:2.64,name:"Wilson",schedule:{Thursday:"10am-5pm"}}]},
  {id:3,label:"Week of Jan 19, 2026",published:false,stJosephEmployees:[{id:3.01,name:"Angie",schedule:{}},{id:3.02,name:"Brianna",schedule:{}},{id:3.03,name:"Cassie",schedule:{Saturday:"6pm-12:15am"}},{id:3.04,name:"Derek",schedule:{Wednesday:"8pm-12:15am",Thursday:"5:30pm-12:15",Friday:"5pm-12:15pm"}},{id:3.05,name:"Ella",schedule:{Monday:"7pm-12:15am"}},{id:3.06,name:"Franco",schedule:{Tuesday:"10am-5:30pm",Thursday:"10am-5:30pm",Saturday:"10am-5:30pm"}},{id:3.07,name:"Josh",schedule:{Monday:"5pm-12:15am",Saturday:"5:30-12:15am"}},{id:3.08,name:"Kalvin",schedule:{Sunday:"5:30-11:30pm"}},{id:3.09,name:"Peter",schedule:{Wednesday:"4pm-12:15am",Sunday:"10am-5:30pm"}},{id:3.10,name:"Richard",schedule:{Tuesday:"5pm-12:15am"}},{id:3.11,name:"Shaun",schedule:{Wednesday:"10am-5pm"}},{id:3.12,name:"Simon",schedule:{Tuesday:"7pm-12:15am"}},{id:3.13,name:"Tim",schedule:{Thursday:"7pm-12:15am",Friday:"7pm-12:15am"}},{id:3.14,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}}],collegeParkEmployees:[{id:3.51,name:"Alida",schedule:{Saturday:"6pm-11:15pm"}},{id:3.52,name:"Angie",schedule:{Monday:"6pm-11:15pm"}},{id:3.53,name:"Annabel",schedule:{Monday:"10am-5pm",Wednesday:"5pm-11:15pm",Thursday:"5pm-11:15pm",Saturday:"10am-5pm",Sunday:"5pm-9:30pm"}},{id:3.54,name:"Brianna",schedule:{Wednesday:"6pm-11:15pm"}},{id:3.55,name:"Cassie",schedule:{}},{id:3.56,name:"Cici",schedule:{}},{id:3.57,name:"Derek",schedule:{Monday:"5pm-11:15pm",Sunday:"10am-5pm"}},{id:3.58,name:"Ella",schedule:{Tuesday:"6pm-11:15pm"}},{id:3.59,name:"Josh",schedule:{Wednesday:"10am-5pm"}},{id:3.60,name:"Kalvin",schedule:{Tuesday:"6pm-11:15pm"}},{id:3.61,name:"Peter",schedule:{Tuesday:"10am-6pm",Friday:"4pm-11:30pm",Saturday:"5pm-11:15pm"}},{id:3.62,name:"Shaun",schedule:{Friday:"10am-5pm"}},{id:3.63,name:"Simon",schedule:{Thursday:"5pm-11:15pm"}},{id:3.64,name:"Wilson",schedule:{Thursday:"10am-5pm"}}]},
  {id:4,label:"Week of Jan 26, 2026",published:false,stJosephEmployees:[{id:4.01,name:"Annabel",schedule:{Saturday:"10am-5:30pm"}},{id:4.02,name:"Cassie",schedule:{Thursday:"7:45pm-12:15am",Saturday:"8pm-12:15am"}},{id:4.03,name:"Cici",schedule:{Saturday:"3pm-7pm"}},{id:4.04,name:"Derek",schedule:{Sunday:"10am-4pm"}},{id:4.05,name:"Ella",schedule:{}},{id:4.06,name:"Franco",schedule:{Tuesday:"5:30-12:15am",Thursday:"5pm-6:30pm"}},{id:4.07,name:"Iris",schedule:{Sunday:"3pm-7pm"}},{id:4.08,name:"Josh",schedule:{Wednesday:"4pm-12:15am",Sunday:"4pm-12:15am"}},{id:4.09,name:"Kalvin",schedule:{Thursday:"6:30pm-12:15am"}},{id:4.10,name:"Peter",schedule:{Monday:"5pm-12:15am",Friday:"10am-5:30pm",Saturday:"5:30-12:15am"}},{id:4.11,name:"Richard",schedule:{Thursday:"10am-5pm",Friday:"5:30-12:15am"}},{id:4.12,name:"Shaun",schedule:{Wednesday:"10am-5pm"}},{id:4.13,name:"Simon",schedule:{Monday:"8pm-12:15am",Sunday:"8pm-12:15am"}},{id:4.14,name:"Tim",schedule:{Tuesday:"8pm-12:15am",Wednesday:"8pm-12:15am",Friday:"7pm-12:15am"}},{id:4.15,name:"Wilson",schedule:{Monday:"10am-5pm",Tuesday:"10am-5pm"}}],collegeParkEmployees:[{id:4.51,name:"Alida",schedule:{Saturday:"2pm-7pm"}},{id:4.52,name:"Angie",schedule:{Monday:"6pm-11:15pm"}},{id:4.53,name:"Annabel",schedule:{Tuesday:"10am-4pm",Friday:"4pm-11:15pm",Sunday:"10am-5pm"}},{id:4.54,name:"Brianna",schedule:{Wednesday:"5pm-11:15pm",Sunday:"6pm-11:15pm"}},{id:4.55,name:"Cassie",schedule:{Tuesday:"6pm-11:15pm"}},{id:4.56,name:"Cici",schedule:{Sunday:"2pm-6pm"}},{id:4.57,name:"Derek",schedule:{Tuesday:"4pm-11:15pm",Friday:"6pm-11:15pm",Saturday:"10am-5pm"}},{id:4.58,name:"Franco",schedule:{Wednesday:"5pm-11:15pm"}},{id:4.59,name:"Josh",schedule:{Saturday:"5pm-11:15pm"}},{id:4.60,name:"Kalvin",schedule:{Sunday:"5pm-11:15pm"}},{id:4.61,name:"Matthew",schedule:{Monday:"4pm-6pm"}},{id:4.62,name:"Peter",schedule:{Wednesday:"10am-5pm",Thursday:"5pm-11:15pm"}},{id:4.63,name:"Richard",schedule:{Monday:"6pm-11:15pm"}},{id:4.64,name:"Shaun",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}},{id:4.65,name:"Simon",schedule:{Thursday:"5pm-11:15pm"}},{id:4.66,name:"Tim",schedule:{Saturday:"7pm-11:15pm"}},{id:4.67,name:"Wilson",schedule:{Thursday:"10am-5pm"}}]},
  {id:5,label:"Week of Feb 2, 2026",published:false,stJosephEmployees:[{id:5.01,name:"Angie",schedule:{Saturday:"3pm-7pm"}},{id:5.02,name:"Annabel",schedule:{Thursday:"10am-5:30pm"}},{id:5.03,name:"Cassie",schedule:{Thursday:"5pm-12:15am",Saturday:"7pm-12:15am"}},{id:5.04,name:"Cici",schedule:{Sunday:"3pm-7pm"}},{id:5.05,name:"Derek",schedule:{Saturday:"4pm-12:15am"}},{id:5.06,name:"Ella",schedule:{Sunday:"7pm-12:15am"}},{id:5.07,name:"Franco",schedule:{Tuesday:"5:30-12:15am",Saturday:"10am-4pm"}},{id:5.08,name:"Iris",schedule:{Tuesday:"8pm-12:15am"}},{id:5.09,name:"Josh",schedule:{Monday:"10am-5:30pm",Tuesday:"10am-5:30pm",Wednesday:"4pm-12:15am",Sunday:"5:30-12:15am"}},{id:5.10,name:"Peter",schedule:{Monday:"5:30-12:15am",Friday:"10am-6:25pm",Sunday:"10am-5:30pm"}},{id:5.11,name:"Richard",schedule:{Wednesday:"5:30-6pm",Thursday:"5:30-12:15am",Friday:"6:20-12:15am"}},{id:5.12,name:"Shaun",schedule:{Wednesday:"10am-5pm"}},{id:5.13,name:"Simon",schedule:{Monday:"8pm-12:15am"}},{id:5.14,name:"Tim",schedule:{Wednesday:"8pm-12:15am",Friday:"7pm-12:15am"}},{id:5.15,name:"Wilson",schedule:{}}],collegeParkEmployees:[{id:5.51,name:"Angie",schedule:{Monday:"7pm-11:15pm"}},{id:5.52,name:"Annabel",schedule:{Tuesday:"10am-5pm",Wednesday:"10am-5pm",Friday:"4pm-11:15pm"}},{id:5.53,name:"Brianna",schedule:{Wednesday:"6pm-11:15pm",Sunday:"3pm-11:15pm"}},{id:5.54,name:"Buya",schedule:{Saturday:"5pm-11:15pm"}},{id:5.55,name:"Cassie",schedule:{Tuesday:"5pm-11:15pm"}},{id:5.56,name:"Derek",schedule:{Monday:"4pm-11:15pm",Tuesday:"5pm-11:15pm"}},{id:5.57,name:"Franco",schedule:{Wednesday:"5pm-11:15pm",Thursday:"10am-5pm"}},{id:5.58,name:"Iris",schedule:{Friday:"5pm-11:15pm",Saturday:"3pm-11:15pm"}},{id:5.59,name:"Josh",schedule:{}},{id:5.60,name:"Kalvin",schedule:{Sunday:"5pm-11:15pm"}},{id:5.61,name:"Peter",schedule:{Thursday:"5pm-11:15pm",Saturday:"10am-5pm"}},{id:5.62,name:"Richard",schedule:{Sunday:"10am-5pm"}},{id:5.63,name:"Shaun",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}},{id:5.64,name:"Simon",schedule:{Thursday:"4pm-11:15pm"}},{id:5.65,name:"Wilson",schedule:{}}]},
  {id:6,label:"Week of Feb 9, 2026",published:false,stJosephEmployees:[{id:6.01,name:"Annabel",schedule:{Friday:"11pm-12:15am"}},{id:6.02,name:"Buya",schedule:{}},{id:6.03,name:"Cici",schedule:{Saturday:"3pm-7pm"}},{id:6.04,name:"Derek",schedule:{Saturday:"5:30-12:15am",Sunday:"8:30-12:15am"}},{id:6.05,name:"Ella",schedule:{Monday:"8pm-12:15am",Thursday:"5pm-12:15am"}},{id:6.06,name:"Franco",schedule:{Tuesday:"5:30-12:15pm",Saturday:"10am-5:30pm"}},{id:6.07,name:"Iris",schedule:{Friday:"5pm-12:15am",Saturday:"7pm-12:15am"}},{id:6.08,name:"Jamie",schedule:{Tuesday:"7pm-12:15am"}},{id:6.09,name:"Josh",schedule:{Tuesday:"10am-5:30pm",Wednesday:"4pm-12:15am",Thursday:"5pm-12:15am"}},{id:6.10,name:"Kalvin",schedule:{Friday:"5:30-9.45pm",Sunday:"5:30-8:30pm"}},{id:6.11,name:"Meghan",schedule:{Sunday:"7pm-12:15am"}},{id:6.12,name:"Peter",schedule:{Friday:"10am-5:30pm",Sunday:"10am-5:30pm"}},{id:6.13,name:"Richard",schedule:{Monday:"5pm-12:15am"}},{id:6.14,name:"Shaun",schedule:{Wednesday:"10am-5pm"}},{id:6.15,name:"Simon",schedule:{Monday:"4pm-8pm, 9:30pm-11:00pm",Wednesday:"5pm-12:15am",Friday:"9:45-11pm",Sunday:"3pm-7pm"}},{id:6.16,name:"Wilson",schedule:{Monday:"10am-5pm",Thursday:"10am-5pm"}}],collegeParkEmployees:[{id:6.51,name:"Alida",schedule:{Saturday:"6pm-11:15pm"}},{id:6.52,name:"Angie",schedule:{Saturday:"2pm-6pm"}},{id:6.53,name:"Annabel",schedule:{Thursday:"10am-5pm",Friday:"4pm-11:15pm",Saturday:"5pm-11:15pm",Sunday:"10am-5pm"}},{id:6.54,name:"Brianna",schedule:{Wednesday:"5pm-11:15pm",Sunday:"3pm-11:15pm"}},{id:6.55,name:"Buya",schedule:{Saturday:"10am-5pm",Sunday:"5pm-11:15pm"}},{id:6.56,name:"Cassie",schedule:{Monday:"2026-01-09 00:00:00",Tuesday:"6pm-11:15pm",Friday:"5pm-11:15pm"}},{id:6.57,name:"Derek",schedule:{Monday:"7pm-11:15pm",Tuesday:"5pm-11:15pm"}},{id:6.58,name:"Franco",schedule:{Wednesday:"10am-3:45pm"}},{id:6.59,name:"Kalvin",schedule:{}},{id:6.60,name:"Meghan",schedule:{Thursday:"4:15pm-11:15pm"}},{id:6.61,name:"Peter",schedule:{Monday:"4pm-11:15pm",Tuesday:"10am-5pm",Wednesday:"3:45-11:15pm",Thursday:"4:15pm-11:15pm"}},{id:6.62,name:"Shaun",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}},{id:6.63,name:"Wilson",schedule:{}}]},
  {id:8,label:"Week of Feb 16, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:8.01,name:"Angie",schedule:{Sunday:"3pm-7pm"}},{id:8.02,name:"Annabel",schedule:{Thursday:"10am-5:30pm",Friday:"5:30-12:15am"}},{id:8.03,name:"Cici",schedule:{Saturday:"1pm-7pm"}},{id:8.04,name:"Ella",schedule:{Sunday:"7pm-12:15am"}},{id:8.05,name:"Franco",schedule:{Tuesday:"5pm-12:15am",Saturday:"10am-5:30pm",Sunday:"5:45-12:15am"}},{id:8.06,name:"Iris",schedule:{Tuesday:"7pm-12:15am",Friday:"6pm-12:15am"}},{id:8.07,name:"Josh",schedule:{Thursday:"5:30-12:15am",Saturday:"5:30-12:15am"}},{id:8.08,name:"Meghan",schedule:{Saturday:"2026-12-06 00:00:00"}},{id:8.09,name:"Peter",schedule:{Monday:"5pm-12:15am",Wednesday:"4pm-12:30am",Friday:"10am-5:30pm",Sunday:"10am-5:45pm"}},{id:8.10,name:"Shaun",schedule:{Wednesday:"10am-5pm"}},{id:8.11,name:"Simon",schedule:{Monday:"6pm-12:15am",Thursday:"6pm-12:15am"}},{id:8.12,name:"Tim",schedule:{Saturday:"7pm-12:15am"}},{id:8.13,name:"Wilson",schedule:{Monday:"10am-5pm",Tuesday:"10am-5pm"}}],collegeParkEmployees:[{id:8.51,name:"Annabel",schedule:{Tuesday:"10am-5pm",Wednesday:"10am-5:15pm",Sunday:"10am-5pm"}},{id:8.52,name:"Brianna",schedule:{Sunday:"3pm-7pm"}},{id:8.53,name:"Buya",schedule:{Friday:"5pm-11:15pm",Saturday:"10am-5pm"}},{id:8.54,name:"Cassie",schedule:{Monday:"5pm-11:15pm",Saturday:"3pm-11:15pm"}},{id:8.55,name:"Derek",schedule:{Monday:"8pm-11:15pm",Tuesday:"5pm-11:15pm"}},{id:8.56,name:"Ella",schedule:{Tuesday:"5pm-11:15pm"}},{id:8.57,name:"Ingrid",schedule:{Thursday:"5pm-11:15pm"}},{id:8.58,name:"Josh",schedule:{Sunday:"5pm-11:15pm"}},{id:8.59,name:"Kalvin",schedule:{Monday:"4pm-8pm",Wednesday:"5pm-11:30pm",Friday:"4pm-5pm"}},{id:8.60,name:"Meghan",schedule:{Friday:"5pm-11:15pm",Sunday:"7pm-11:15pm"}},{id:8.61,name:"Peter",schedule:{Thursday:"5pm-11:15pm"}},{id:8.62,name:"Shaun",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}},{id:8.63,name:"Wilson",schedule:{Thursday:"10am-5pm"}}]},
  {id:9,label:"Week of Feb 23, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:9.01,name:"Angie",schedule:{}},{id:9.02,name:"Buya",schedule:{}},{id:9.03,name:"Cici",schedule:{}},{id:9.04,name:"Derek",schedule:{}},{id:9.05,name:"Ella",schedule:{Wednesday:"7pm-12:15am"}},{id:9.06,name:"Franco",schedule:{Friday:"4pm-12:15am",Sunday:"10am-5:30pm"}},{id:9.07,name:"Iris",schedule:{}},{id:9.08,name:"Joshua",schedule:{}},{id:9.09,name:"Kalvin",schedule:{}},{id:9.10,name:"Meghan",schedule:{Friday:"6pm-12:15am"}},{id:9.11,name:"Peter",schedule:{Monday:"5pm-12:15am",Sunday:"5:30-12:15am"}},{id:9.12,name:"Richard",schedule:{Wednesday:"5pm-12:15am"}},{id:9.13,name:"Shaun",schedule:{Friday:"10am-5pm"}},{id:9.14,name:"Simon",schedule:{Monday:"7pm-12:15am",Sunday:"6pm-12:15am"}},{id:9.15,name:"Tim",schedule:{}},{id:9.16,name:"Wilson",schedule:{Monday:"10am-5pm",Wednesday:"10am-5pm"}}],collegeParkEmployees:[{id:9.51,name:"Annabel",schedule:{Wednesday:"10am-5pm"}},{id:9.52,name:"Brianna",schedule:{}},{id:9.53,name:"Cassie",schedule:{Monday:"6pm-11:15pm",Sunday:"5pm-11:15pm"}},{id:9.54,name:"Derek",schedule:{Wednesday:"5pm-11:15pm",Sunday:"5pm-11:15pm"}},{id:9.55,name:"Ella",schedule:{}},{id:9.56,name:"Ingrid",schedule:{Friday:"5pm-11:15pm"}},{id:9.57,name:"Joshua",schedule:{Monday:"4pm-11:15pm",Friday:"10am-4pm"}},{id:9.58,name:"Kalvin",schedule:{}},{id:9.59,name:"Meghan",schedule:{Wednesday:"6pm-11:15pm"}},{id:9.60,name:"Peter",schedule:{Friday:"4pm-11:15pm"}},{id:9.61,name:"Richard",schedule:{}},{id:9.62,name:"Shaun",schedule:{}},{id:9.63,name:"Simon",schedule:{}},{id:9.64,name:"Wilson",schedule:{Sunday:"10am-5pm"}}]},
  {id:10,label:"Week of Mar 2, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:10.01,name:"Angie",schedule:{Sunday:"5pm-12:15am"}},{id:10.02,name:"Annabel",schedule:{Monday:"5pm-12:15am"}},{id:10.03,name:"Buya",schedule:{Sunday:"10am-12:15am"}},{id:10.04,name:"Cassie",schedule:{Monday:"7pm-12:15am"}},{id:10.05,name:"Cici",schedule:{Saturday:"2pm-7pm",Sunday:"2pm-9pm"}},{id:10.06,name:"Derek",schedule:{Wednesday:"5:30-12:15am"}},{id:10.07,name:"Ella",schedule:{Thursday:"6pm-12:15am"}},{id:10.08,name:"Franco",schedule:{Wednesday:"10am-5:30pm",Thursday:"10am-5:30pm"}},{id:10.09,name:"Iris",schedule:{Friday:"7pm-12:15am"}},{id:10.10,name:"Joshua",schedule:{Tuesday:"5:30-12:15am",Saturday:"5:30pm-12:15am"}},{id:10.11,name:"Peter",schedule:{Thursday:"5:30-12:15am"}},{id:10.12,name:"Richard",schedule:{Tuesday:"10am-5:30pm",Wednesday:"12:30-1:30pm",Friday:"5pm-12:15am"}},{id:10.13,name:"Shaun",schedule:{}},{id:10.14,name:"Simon",schedule:{Tuesday:"7pm-12:15am",Wednesday:"6pm-12:15am"}},{id:10.15,name:"Tim",schedule:{Saturday:"7pm-12:15am"}},{id:10.16,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}}],collegeParkEmployees:[{id:10.51,name:"Angie",schedule:{}},{id:10.52,name:"Annabel",schedule:{Thursday:"10am-5pm",Friday:"10am-5pm",Sunday:"5pm-11:15pm"}},{id:10.53,name:"Brianna",schedule:{Saturday:"2pm-8:45pm"}},{id:10.54,name:"Cassie",schedule:{Friday:"5pm-11:15pm",Saturday:"4:30pm-11:15pm"}},{id:10.55,name:"Derek",schedule:{Tuesday:"5pm-11:15pm",Friday:"7pm-11:15pm"}},{id:10.56,name:"Ella",schedule:{Monday:"6pm-11:15pm",Tuesday:"6pm-11:15pm"}},{id:10.57,name:"Franco",schedule:{Saturday:"6pm-11:15pm"}},{id:10.58,name:"Ingrid",schedule:{Wednesday:"5pm-11:15pm"}},{id:10.59,name:"Joshua",schedule:{Monday:"5pm-11:15pm",Thursday:"5pm-11:15pm"}},{id:10.60,name:"Kalvin",schedule:{Friday:"5pm-7pm",Saturday:"10am-6pm"}},{id:10.61,name:"Meghan",schedule:{Thursday:"5pm-11:15pm",Sunday:"2pm-10pm"}},{id:10.62,name:"Peter",schedule:{Monday:"10am-5pm",Tuesday:"10am-5pm",Wednesday:"5pm-11:15pm"}},{id:10.63,name:"Richard",schedule:{Sunday:"10am-5pm"}},{id:10.64,name:"Shaun",schedule:{}},{id:10.65,name:"Simon",schedule:{Sunday:"4pm-11:15pm"}},{id:10.66,name:"Wilson",schedule:{Wednesday:"10am-5pm"}}]},
  {id:11,label:"Week of Mar 9, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:11.01,name:"Angie",schedule:{}},{id:11.02,name:"Annabel",schedule:{Wednesday:"10am-5:30pm"}},{id:11.03,name:"Brianna",schedule:{Sunday:"3pm-10pm"}},{id:11.04,name:"Cassie",schedule:{Wednesday:"5pm-12:15am",Friday:"5pm-12:15am"}},{id:11.05,name:"Ella",schedule:{Monday:"6pm-12:15am",Thursday:"5pm-12:15am"}},{id:11.06,name:"Franco",schedule:{Tuesday:"10am-6:15pm",Thursday:"10am-5:30pm",Saturday:"6pm-12:15am"}},{id:11.07,name:"Iris",schedule:{Saturday:"7pm-12:15am"}},{id:11.08,name:"Joshua",schedule:{Wednesday:"5:30-12:15am",Saturday:"10am-6pm",Sunday:"10am-5:30pm"}},{id:11.09,name:"Kalvin",schedule:{Monday:"5pm-12:15am",Sunday:"5:30-12:15am"}},{id:11.10,name:"Meghan",schedule:{Monday:"5pm-10pm",Sunday:"7pm-12:15am"}},{id:11.11,name:"Peter",schedule:{Thursday:"5:30-12:15am"}},{id:11.12,name:"Richard",schedule:{Tuesday:"5:30-12:15am",Friday:"5pm-12:15am"}},{id:11.13,name:"Shaun",schedule:{}},{id:11.14,name:"Simon",schedule:{Monday:"12pm-6pm",Tuesday:"7pm-12:15am",Saturday:"3pm-10pm"}},{id:11.15,name:"Tim",schedule:{}},{id:11.16,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}}],collegeParkEmployees:[{id:11.51,name:"Alida",schedule:{Saturday:"2pm-7:30pm"}},{id:11.52,name:"Angie",schedule:{Friday:"3pm-7pm"}},{id:11.53,name:"Annabel",schedule:{Monday:"5pm-11:15pm",Tuesday:"10am-6pm",Thursday:"3pm-11:15pm"}},{id:11.54,name:"Brianna",schedule:{Monday:"2pm-10pm"}},{id:11.55,name:"Buya",schedule:{Friday:"5:30pm-11:15pm",Saturday:"5pm-11:15pm"}},{id:11.56,name:"Cassie",schedule:{Monday:"12pm-6pm",Saturday:"6pm-11:15pm"}},{id:11.57,name:"Cici",schedule:{Sunday:"2pm-9pm"}},{id:11.58,name:"Derek",schedule:{Monday:"6pm-11:15pm",Saturday:"10am-5pm"}},{id:11.59,name:"Ella",schedule:{Tuesday:"4pm-11:15pm"}},{id:11.60,name:"Franco",schedule:{Sunday:"6pm-11:15pm"}},{id:11.61,name:"Ingrid",schedule:{Wednesday:"6pm-11:15pm"}},{id:11.62,name:"Iris",schedule:{Friday:"6pm-11:15pm"}},{id:11.63,name:"Kalvin",schedule:{Tuesday:"6pm-11:15pm",Wednesday:"10am-5:15pm"}},{id:11.64,name:"Meghan",schedule:{Thursday:"4pm-11:15pm"}},{id:11.65,name:"Peter",schedule:{Monday:"10am-5pm",Wednesday:"5pm-11:15pm",Friday:"10am-5:30pm"}},{id:11.66,name:"Richard",schedule:{Sunday:"10am-6:15pm"}},{id:11.67,name:"Shaun",schedule:{}},{id:11.68,name:"Simon",schedule:{Sunday:"6:15pm-11:15pm"}},{id:11.69,name:"Wilson",schedule:{}}]},
  {id:12,label:"Week of Mar 16, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:12.01,name:"Angie",schedule:{Sunday:"7pm-12:15am"}},{id:12.02,name:"Annabel",schedule:{Tuesday:"5:30-12:15am"}},{id:12.03,name:"Brianna",schedule:{Sunday:"3pm-10pm"}},{id:12.04,name:"Cassie",schedule:{Wednesday:"5pm-12:15am"}},{id:12.05,name:"Derek",schedule:{Friday:"5:30-12:15am",Saturday:"5:30-12:15am"}},{id:12.06,name:"Ella",schedule:{Monday:"6pm-12:15am",Saturday:"3pm-10pm"}},{id:12.07,name:"Franco",schedule:{Thursday:"10am-5:30pm"}},{id:12.08,name:"Iris",schedule:{Thursday:"7pm-12:15am",Friday:"7pm-12:15am"}},{id:12.09,name:"Joshua",schedule:{Thursday:"5:30-12:15am",Saturday:"10am-5:30pm"}},{id:12.10,name:"Kalvin",schedule:{Sunday:"5:30-12:15am"}},{id:12.11,name:"Peter",schedule:{Tuesday:"10am-5:30pm",Wednesday:"10am-5:30pm",Friday:"10am-5:30pm"}},{id:12.12,name:"Richard",schedule:{Monday:"5:30-12:15am",Wednesday:"5:30-12:15am",Sunday:"10am-5:30pm"}},{id:12.13,name:"Shaun",schedule:{}},{id:12.14,name:"Simon",schedule:{Tuesday:"6pm-12:15am",Thursday:"3pm-7pm",Friday:"3pm-10pm"}},{id:12.15,name:"Tim",schedule:{Saturday:"7pm-12:15am"}},{id:12.16,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}}],collegeParkEmployees:[{id:12.51,name:"Angie",schedule:{Friday:"3pm-9pm",Saturday:"6pm-11:15pm"}},{id:12.52,name:"Annabel",schedule:{Wednesday:"10am-5pm",Thursday:"10am-5pm",Saturday:"5pm-11:15pm",Sunday:"10am-5pm"}},{id:12.53,name:"Brianna",schedule:{Friday:"6pm-11:15pm"}},{id:12.54,name:"Buya",schedule:{Saturday:"10am-5pm"}},{id:12.55,name:"Cassie",schedule:{Thursday:"3pm-11:15pm"}},{id:12.56,name:"Cici",schedule:{Friday:"10am-5pm",Sunday:"2pm-8pm"}},{id:12.57,name:"Derek",schedule:{Tuesday:"5pm-11:15pm"}},{id:12.58,name:"Franco",schedule:{Tuesday:"10am-5pm",Sunday:"6pm-11:15pm"}},{id:12.59,name:"Ingrid",schedule:{Tuesday:"5pm-11:15pm"}},{id:12.60,name:"Iris",schedule:{Saturday:"2pm-9pm"}},{id:12.61,name:"Joshua",schedule:{Monday:"5pm-11:15pm",Sunday:"5pm-11:15pm"}},{id:12.62,name:"Kalvin",schedule:{Friday:"5pm-11:15pm"}},{id:12.63,name:"Meghan",schedule:{Monday:"4pm-11:15pm",Wednesday:"4pm-11:15pm"}},{id:12.64,name:"Peter",schedule:{Monday:"10am-5pm",Thursday:"5pm-11:15pm"}},{id:12.65,name:"Shaun",schedule:{}},{id:12.66,name:"Wilson",schedule:{}}]},
  {id:13,label:"Week of Mar 23, 2026 (Auto-Generated Draft)",published:false,stJosephEmployees:[{id:13.01,name:"Wilson",schedule:{Monday:"10am-5pm",Friday:"10am-5pm"}},{id:13.02,name:"Joshua",schedule:{Monday:"5:30-12:15am",Wednesday:"10am-5:30pm",Thursday:"5:30-12:15am"}},{id:13.03,name:"Ella",schedule:{Monday:"7pm-12:15am",Sunday:"3pm-10pm"}},{id:13.04,name:"Peter",schedule:{Tuesday:"10am-5:30pm",Wednesday:"5:30-12:15am"}},{id:13.05,name:"Derek",schedule:{Tuesday:"5:30-12:15am"}},{id:13.06,name:"Cassie",schedule:{Wednesday:"6pm-12:15am",Friday:"3pm-9pm",Saturday:"3pm-10pm"}},{id:13.07,name:"Franco",schedule:{Thursday:"10am-5:30pm"}},{id:13.08,name:"Simon",schedule:{Tuesday:"7pm-12:15am",Thursday:"6pm-12:15am"}},{id:13.09,name:"Richard",schedule:{Friday:"5pm-12:15am",Sunday:"10am-5pm"}},{id:13.10,name:"Tim",schedule:{Friday:"7pm-12:15am"}},{id:13.11,name:"Kalvin",schedule:{Saturday:"10am-5:30pm",Sunday:"5:30-12:15am"}},{id:13.12,name:"Iris",schedule:{Saturday:"7pm-12:15am"}},{id:13.13,name:"Angie",schedule:{Sunday:"7pm-12:15am"}},{id:13.14,name:"Alida",schedule:{}},{id:13.15,name:"Annabel",schedule:{Saturday:"5:30-12:15am"}},{id:13.16,name:"Brianna",schedule:{}},{id:13.17,name:"Buya",schedule:{}},{id:13.18,name:"Christie",schedule:{}},{id:13.19,name:"Cici",schedule:{}},{id:13.20,name:"Ingrid",schedule:{}},{id:13.21,name:"Kathy",schedule:{}},{id:13.22,name:"Meghan",schedule:{}},{id:13.23,name:"Shaun",schedule:{}}],collegeParkEmployees:[{id:13.51,name:"Peter",schedule:{Monday:"10am-5pm",Thursday:"5pm-11:15pm",Sunday:"10am-5pm"}},{id:13.52,name:"Annabel",schedule:{Monday:"5pm-11:15pm",Tuesday:"10am-5pm",Thursday:"10am-5pm"}},{id:13.53,name:"Meghan",schedule:{Monday:"6pm-11:15pm",Thursday:"4pm-11:15pm",Saturday:"6pm-11:15pm"}},{id:13.54,name:"Ingrid",schedule:{Tuesday:"6pm-11:15pm"}},{id:13.55,name:"Franco",schedule:{Tuesday:"5pm-11:15pm",Wednesday:"10am-5pm",Sunday:"6pm-11:15pm"}},{id:13.56,name:"Derek",schedule:{Friday:"5pm-11:15pm",Saturday:"5pm-11:15pm"}},{id:13.57,name:"Brianna",schedule:{Wednesday:"5pm-11:15pm",Saturday:"3pm-9pm",Sunday:"3pm-9pm"}},{id:13.58,name:"Wilson",schedule:{Wednesday:"5pm-11:15pm"}},{id:13.59,name:"Cassie",schedule:{}},{id:13.60,name:"Kalvin",schedule:{Friday:"10am-5pm"}},{id:13.61,name:"Angie",schedule:{Friday:"4pm-9pm"}},{id:13.62,name:"Iris",schedule:{Friday:"6pm-11:15pm"}},{id:13.63,name:"Buya",schedule:{Saturday:"10am-5pm"}},{id:13.64,name:"Simon",schedule:{Sunday:"5pm-11:15pm"}},{id:13.65,name:"Alida",schedule:{}},{id:13.66,name:"Christie",schedule:{}},{id:13.67,name:"Cici",schedule:{}},{id:13.68,name:"Ella",schedule:{}},{id:13.69,name:"Joshua",schedule:{}},{id:13.70,name:"Kathy",schedule:{}},{id:13.71,name:"Shaun",schedule:{}},{id:13.72,name:"Tim",schedule:{}}]}
];

const INITIAL_DIRECTORY = {
  "Alida":    { role: "Employee",  preferredStore: "cp",  shiftPreference: "any",   notes: "Only available Sat/Sun. Wants 6-8 hours." },
  "Angie":    { role: "Employee",  preferredStore: "cp",  shiftPreference: "any",   notes: "Wants ~3 hours or 1 shift." },
  "Annabel":  { role: "Team Lead", preferredStore: "cp",  shiftPreference: "open",  notes: "4-5 shifts per week." },
  "Brianna":  { role: "Employee",  preferredStore: "cp",  shiftPreference: "close", notes: "2-3 shifts. Usually Wed/Sat/Sun." },
  "Buya":     { role: "Team Lead", preferredStore: "any", shiftPreference: "close", notes: "Only closing shifts. 0-1 shifts." },
  "Cassie":   { role: "Employee",  preferredStore: "any", shiftPreference: "any",   notes: "Wants 4 shifts per week." },
  "Christie": { role: "Employee",  preferredStore: "sj",  shiftPreference: "close", notes: "1-2 shifts. Usually Wed only." },
  "Cici":     { role: "Team Lead", preferredStore: "any", shiftPreference: "mid",   notes: "Available 12-8pm. Wants ~20 hours." },
  "Derek":    { role: "Team Lead", preferredStore: "cp",  shiftPreference: "close", notes: "Available 4pm-close typically." },
  "Ella":     { role: "Employee",  preferredStore: "any", shiftPreference: "any",   notes: "3-4 shifts. Can do open or helper." },
  "Franco":   { role: "Team Lead", preferredStore: "sj",  shiftPreference: "open",  notes: "3-4 shifts. Primarily SJ opener." },
  "Ingrid":   { role: "Employee",  preferredStore: "cp",  shiftPreference: "close", notes: "Limited availability, flexible on shifts." },
  "Iris":     { role: "Employee",  preferredStore: "any", shiftPreference: "close", notes: "2-3 shifts." },
  "Joshua":   { role: "Team Lead", preferredStore: "sj",  shiftPreference: "any",   notes: "Wants 30+ hours." },
  "Kalvin":   { role: "Team Lead", preferredStore: "any", shiftPreference: "any",   notes: "3 shifts per week." },
  "Meghan":   { role: "Employee",  preferredStore: "any", shiftPreference: "close", notes: "3-4 shifts." },
  "Peter":    { role: "Team Lead", preferredStore: "any", shiftPreference: "close", notes: "5 shifts per week." },
  "Richard":  { role: "Team Lead",  preferredStore: "any", shiftPreference: "any",   notes: "0 shifts requested." },
  "Shaun":    { role: "Team Lead", preferredStore: "sj",  shiftPreference: "open",  notes: "Do not schedule." },
  "Simon":    { role: "Employee",  preferredStore: "sj",  shiftPreference: "any",   notes: "5 shifts, 20+ hours." },
  "Tim":      { role: "Employee",  preferredStore: "sj",  shiftPreference: "close", notes: "2 shifts. Available 7pm-close Fri/Sat." },
  "Wilson":   { role: "Team Lead", preferredStore: "sj",  shiftPreference: "open",  notes: "Mon opening at either store, Wed closing at CP, Fri opening at either store. One of Mon/Fri must be at SJ. Peter opens at the other store on Mon." },
};

export default function ScheduleApp() {
  const [schedules, setSchedules] = useState(INITIAL_SCHEDULES);
  const [activeScheduleId, setActiveScheduleId] = useState(INITIAL_SCHEDULES[INITIAL_SCHEDULES.length - 1].id);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [activeView, setActiveView] = useState('schedules'); // 'schedules' | 'combined' | 'published' | 'directory'
  const [copyStatus, setCopyStatus] = useState(null);
  const [dirCopyStatus, setDirCopyStatus] = useState(null);
  const [sjCopyStatus, setSjCopyStatus] = useState(null);
  const [cpCopyStatus, setCpCopyStatus] = useState(null);
  const [directory, setDirectory] = useState(INITIAL_DIRECTORY);

  const copyDirectoryToClipboard = () => {
    const lines = getAllEmployeeNames().map(name => {
      const e = getEmployee(name);
      return `${name} | ${e.role} | Store: ${e.preferredStore === 'sj' ? 'St Joseph' : e.preferredStore === 'cp' ? 'College Park' : 'Either'} | Shift: ${e.shiftPreference === 'open' ? 'Opening' : e.shiftPreference === 'close' ? 'Closing' : e.shiftPreference === 'mid' ? 'Mid/Helper' : 'Any'} | Notes: ${e.notes || '—'}`;
    });
    const text = "=== EMPLOYEE DIRECTORY ===\n" + lines.join("\n");
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setDirCopyStatus('copied');
      setTimeout(() => setDirCopyStatus(null), 2000);
    } catch (err) {
      setDirCopyStatus('error');
      setTimeout(() => setDirCopyStatus(null), 2000);
    }
  };

  const copyTableForExcel = (employees, storeName) => {
    const setStatus = storeName === 'St Joseph' ? setSjCopyStatus : setCpCopyStatus;
    const dayHeaders = days.map((d, i) => formatDayHeader(d, i));
    const header = ['Employee', ...dayHeaders].join('\t');
    const rows = [...employees]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(emp => [emp.name, ...days.map(d => emp.schedule[d] || '')].join('\t'));
    const text = [header, ...rows].join('\n');
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setStatus('copied');
      setTimeout(() => setStatus(null), 2000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(null), 2000);
    }
  };
  // directory shape: { "Name": { role: "Team Lead" | "Employee", preferredStore: "any" | "sj" | "cp", shiftPreference: "any" | "open" | "close", notes: "" } }

  const getEmployee = (name) => directory[name] || { role: 'Employee', preferredStore: 'any', shiftPreference: 'any', notes: '' };
  const updateEmployee = (name, field, value) => {
    setDirectory(prev => ({ ...prev, [name]: { ...getEmployee(name), [name]: undefined, ...prev[name], [field]: value } }));
  };
  const updateDir = (name, updates) => {
    setDirectory(prev => ({ ...prev, [name]: { ...getEmployee(name), ...prev[name], ...updates } }));
  };
  const isTeamLead = (name) => getEmployee(name).role === 'Team Lead';

  const removeFromDirectory = (name) => {
    setDirectory(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const getAllEmployeeNames = () => {
    return Object.keys(directory).sort();
  };

  const activeSchedule = schedules.find(s => s.id === activeScheduleId) || schedules[0];
  const stJosephEmployees = activeSchedule.stJosephEmployees;
  const collegeParkEmployees = activeSchedule.collegeParkEmployees;
  const scheduleLabel = activeSchedule.label;
  const isPublished = activeSchedule.published;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getWeekDates = () => {
    const dateMatch = scheduleLabel.match(/Week of (.+)/i);
    if (dateMatch) {
      try {
        const startDate = new Date(dateMatch[1].trim());
        if (!isNaN(startDate.getTime())) {
          const dayOfWeek = startDate.getDay();
          const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
          const monday = new Date(startDate);
          monday.setDate(monday.getDate() + diff);
          return days.map((_, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return d; });
        }
      } catch (e) {}
    }
    return null;
  };

  const weekDates = getWeekDates();

  const formatDayHeader = (dayName, index) => {
    if (weekDates?.[index]) {
      const d = weekDates[index];
      return `${d.toLocaleDateString('en-US',{weekday:'short'})} ${d.toLocaleDateString('en-US',{month:'short'})} ${d.getDate()}`;
    }
    return dayName;
  };

  const parseTimePart = (timeStr) => {
    let m = timeStr.match(/(\d+):(\d+)\s*(am|pm)/i);
    if (m) { let h = parseInt(m[1]), min = parseInt(m[2]), p = m[3].toLowerCase(); if (p==='pm'&&h!==12) h+=12; if (p==='am'&&h===12) h=0; return h+min/60; }
    m = timeStr.match(/(\d+)\s*(am|pm)/i);
    if (m) { let h = parseInt(m[1]), p = m[2].toLowerCase(); if (p==='pm'&&h!==12) h+=12; if (p==='am'&&h===12) h=0; return h; }
    m = timeStr.match(/^(\d+):(\d+)$/);
    if (m) return { hours: parseInt(m[1]), minutes: parseInt(m[2]), ambiguous: true };
    m = timeStr.match(/^(\d+)$/);
    if (m) return { hours: parseInt(m[1]), minutes: 0, ambiguous: true };
    return null;
  };

  const calculateHoursForRange = (rangeStr) => {
    if (!rangeStr || !rangeStr.trim()) return 0;
    const parts = rangeStr.split('-').map(t => t.trim());
    if (parts.length < 2) return 0;
    let startStr, endStr;
    if (parts.length === 2) { startStr = parts[0]; endStr = parts[1]; }
    else { startStr = parts[0]; endStr = parts.slice(1).join('-'); }
    let startVal = parseTimePart(startStr);
    let endVal = parseTimePart(endStr);
    if (startVal === null || endVal === null) return 0;
    let startHours, endHours;
    if (typeof endVal === 'object' && endVal.ambiguous) return 0;
    endHours = typeof endVal === 'object' ? endVal.hours + endVal.minutes/60 : endVal;
    if (typeof startVal === 'object' && startVal.ambiguous) {
      let raw = startVal.hours + startVal.minutes / 60;
      if (endHours < 6) { if (raw < 12) raw += 12; }
      else if (endHours >= 12) { if (raw <= endHours - 12) raw += 12; }
      startHours = raw;
    } else { startHours = startVal; }
    let diff = endHours - startHours;
    if (diff < 0) diff += 24;
    if (diff > 16) diff = 24 - diff;
    return Math.max(0, diff);
  };

  const calculateHours = (timeRange) => {
    if (!timeRange || !timeRange.trim()) return 0;
    return timeRange.split(',').map(s => s.trim()).filter(Boolean).reduce((t, seg) => t + calculateHoursForRange(seg), 0);
  };

  const calculateWeekTotal = (schedule) => days.reduce((t, d) => t + calculateHours(schedule[d] || ''), 0);

  const getCombinedData = () => {
    const map = {};
    stJosephEmployees.forEach(e => { if (!map[e.name]) map[e.name] = {name:e.name,stJoseph:{},collegePark:{}}; map[e.name].stJoseph = e.schedule; });
    collegeParkEmployees.forEach(e => { if (!map[e.name]) map[e.name] = {name:e.name,stJoseph:{},collegePark:{}}; map[e.name].collegePark = e.schedule; });
    return Object.values(map).sort((a,b) => a.name.localeCompare(b.name)).map(emp => {
      const dh = days.map(d => { const sj = calculateHours(emp.stJoseph[d]||''); const cp = calculateHours(emp.collegePark[d]||''); return {day:d,stJoseph:sj,collegePark:cp,total:sj+cp}; });
      const sjT = dh.reduce((s,d)=>s+d.stJoseph,0), cpT = dh.reduce((s,d)=>s+d.collegePark,0);
      return {name:emp.name,dailyHours:dh,sjWeekTotal:sjT,cpWeekTotal:cpT,weekTotal:sjT+cpT};
    });
  };

  const handleFileUpload = () => {
    alert('Excel import is available when running this app locally with SheetJS. Your previously imported data is already loaded.');
  };

  const updateSchedule = (loc,eid,day,val) => {
    const k=loc==='stJoseph'?'stJosephEmployees':'collegeParkEmployees';
    setSchedules(schedules.map(s=>s.id===activeScheduleId?{...s,[k]:s[k].map(e=>e.id===eid?{...e,schedule:{...e.schedule,[day]:val}}:e)}:s));
  };

  const [selectedEmployeeToAdd, setSelectedEmployeeToAdd] = useState('');
  const [payrollWeeks, setPayrollWeeks] = useState(new Set([INITIAL_SCHEDULES[INITIAL_SCHEDULES.length - 1].id]));
  const [sjTips, setSjTips] = useState('');
  const [cpTips, setCpTips] = useState('');
  const [vacationDate, setVacationDate] = useState('2026-02-23');

  const getWeekStartDate = (label) => {
    const m = label.match(/Week of (\w+ \d+, \d+)/);
    if (!m) return null;
    return new Date(m[1]);
  };

  const getVacationData = () => {
    const target = new Date(vacationDate + 'T12:00:00');
    const startWindow = new Date(target);
    startWindow.setDate(startWindow.getDate() - 28);
    const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const map = {};
    schedules.forEach(s => {
      const weekStart = getWeekStartDate(s.label);
      if (!weekStart) return;
      // For each day Mon-Sun in this schedule week
      days.forEach((dayName, di) => {
        const dayDate = new Date(weekStart);
        dayDate.setDate(dayDate.getDate() + di);
        // Only count if this specific day falls within [startWindow, target)
        if (dayDate >= startWindow && dayDate < target) {
          s.stJosephEmployees.forEach(e => {
            const h = calculateHours(e.schedule[dayName] || '');
            if (h > 0) {
              if (!map[e.name]) map[e.name] = { name: e.name, totalHours: 0 };
              map[e.name].totalHours += h;
            }
          });
          s.collegeParkEmployees.forEach(e => {
            const h = calculateHours(e.schedule[dayName] || '');
            if (h > 0) {
              if (!map[e.name]) map[e.name] = { name: e.name, totalHours: 0 };
              map[e.name].totalHours += h;
            }
          });
        }
      });
    });

    // Figure out which weeks were touched for display
    const touchedWeeks = schedules.filter(s => {
      const weekStart = getWeekStartDate(s.label);
      if (!weekStart) return false;
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      return weekEnd >= startWindow && weekStart < target;
    }).map(s => s.label.replace(' (Auto-Generated Draft)',''));

    return {
      weeks: touchedWeeks,
      startDate: startWindow,
      employees: Object.values(map)
        .map(e => ({ ...e, vacationPay: e.totalHours / 20 }))
        .filter(e => e.totalHours > 0)
        .sort((a, b) => a.name.localeCompare(b.name))
    };
  };

  const togglePayrollWeek = (id) => {
    setPayrollWeeks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Ontario statutory holidays (YYYY-MM-DD)
  const ONTARIO_STAT_HOLIDAYS = [
    '2026-01-01', // New Year's Day
    '2026-02-16', // Family Day
    '2026-04-03', // Good Friday
    '2026-05-18', // Victoria Day
    '2026-07-01', // Canada Day
    '2026-08-03', // Civic Holiday
    '2026-09-07', // Labour Day
    '2026-10-12', // Thanksgiving
    '2026-12-25', // Christmas
    '2026-12-26', // Boxing Day
  ];
  const statHolidaySet = new Set(ONTARIO_STAT_HOLIDAYS);

  const isStatHoliday = (weekStartDate, dayIndex) => {
    if (!weekStartDate) return false;
    const d = new Date(weekStartDate);
    d.setDate(d.getDate() + dayIndex);
    const str = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    return statHolidaySet.has(str);
  };

  const getPayrollData = () => {
    const selected = schedules.filter(s => payrollWeeks.has(s.id));
    if (selected.length === 0) return [];
    const map = {};
    selected.forEach(s => {
      const weekStart = getWeekStartDate(s.label);
      s.stJosephEmployees.forEach(e => {
        if (!map[e.name]) map[e.name] = { name: e.name, sjHours: 0, cpHours: 0, holidayHours: 0 };
        days.forEach((d, di) => {
          const h = calculateHours(e.schedule[d] || '');
          if (h > 0) {
            if (isStatHoliday(weekStart, di)) {
              map[e.name].holidayHours += h;
            } else {
              map[e.name].sjHours += h;
            }
          }
        });
      });
      s.collegeParkEmployees.forEach(e => {
        if (!map[e.name]) map[e.name] = { name: e.name, sjHours: 0, cpHours: 0, holidayHours: 0 };
        days.forEach((d, di) => {
          const h = calculateHours(e.schedule[d] || '');
          if (h > 0) {
            if (isStatHoliday(weekStart, di)) {
              map[e.name].holidayHours += h;
            } else {
              map[e.name].cpHours += h;
            }
          }
        });
      });
    });
    return Object.values(map)
      .map(e => ({ ...e, totalHours: e.sjHours + e.cpHours }))
      .filter(e => e.totalHours > 0 || e.holidayHours > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const getEmployeesNotOnSchedule = () => {
    const onSchedule = new Set();
    stJosephEmployees.forEach(e => onSchedule.add(e.name));
    collegeParkEmployees.forEach(e => onSchedule.add(e.name));
    return getAllEmployeeNames().filter(n => !onSchedule.has(n));
  };

  const addEmployeeFromDirectory = () => {
    if (!selectedEmployeeToAdd) return;
    const ts = Date.now();
    setSchedules(schedules.map(s => s.id === activeScheduleId ? {
      ...s,
      stJosephEmployees: [...s.stJosephEmployees, { id: ts, name: selectedEmployeeToAdd, schedule: {} }],
      collegeParkEmployees: [...s.collegeParkEmployees, { id: ts + 0.5, name: selectedEmployeeToAdd, schedule: {} }]
    } : s));
    setSelectedEmployeeToAdd('');
  };

  const removeEmployee = (loc,eid) => {
    const k=loc==='stJoseph'?'stJosephEmployees':'collegeParkEmployees';
    setSchedules(schedules.map(s=>s.id===activeScheduleId?{...s,[k]:s[k].filter(e=>e.id!==eid)}:s));
  };

  const updateScheduleLabel = (v) => setSchedules(schedules.map(s=>s.id===activeScheduleId?{...s,label:v}:s));

  const publishSchedule = () => {
    setSchedules(schedules.map(s => s.id === activeScheduleId ? { ...s, published: true } : s));
    setActiveView('published');
  };

  const unpublishSchedule = () => {
    setSchedules(schedules.map(s => s.id === activeScheduleId ? { ...s, published: false } : s));
    setActiveView('schedules');
  };

  const generateShareableHTML = () => {
    const sched = activeSchedule;
    const dayHeaders = days.map((d, i) => formatDayHeader(d, i));

    const buildRows = (employees) => {
      return [...employees]
        .filter(emp => Object.values(emp.schedule).some(v => v && v.trim()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((emp, idx) => {
          const bg = idx % 2 === 0 ? '#fff' : '#f9fafb';
          const cells = days.map(d => `<td style="padding:8px 12px;text-align:center;border:1px solid #e5e7eb;">${emp.schedule[d] || ''}</td>`).join('');
          return `<tr style="background:${bg}"><td style="padding:8px 12px;font-weight:600;border:1px solid #e5e7eb;white-space:nowrap;">${emp.name}</td>${cells}</tr>`;
        }).join('');
    };

    const headerRow = `<tr style="background:#f3f4f6;">\n<th style="padding:8px 12px;text-align:left;border:1px solid #e5e7eb;font-weight:600;">Employee</th>\n${dayHeaders.map(d => `<th style="padding:8px 12px;text-align:center;border:1px solid #e5e7eb;font-weight:600;min-width:110px;">${d}</th>`).join('')}\n</tr>`;

    const sjRows = buildRows(sched.stJosephEmployees);
    const cpRows = buildRows(sched.collegeParkEmployees);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${sched.label} - Employee Schedule</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f9fafb; color: #1f2937; padding: 24px; }
  .container { max-width: 1100px; margin: 0 auto; }
  h1 { text-align: center; font-size: 28px; margin-bottom: 4px; }
  .subtitle { text-align: center; color: #6b7280; margin-bottom: 32px; font-size: 14px; }
  .location-header { text-align: center; font-size: 22px; font-weight: 700; padding: 14px; border-radius: 8px 8px 0 0; margin-bottom: 0; }
  .sj-header { background: #dbeafe; }
  .cp-header { background: #dcfce7; }
  table { width: 100%; border-collapse: collapse; background: #fff; margin-bottom: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 0 0 8px 8px; overflow: hidden; font-size: 14px; }
  @media (max-width: 768px) {
    body { padding: 8px; }
    table { font-size: 12px; }
    th, td { padding: 4px 6px !important; }
    h1 { font-size: 20px; }
    .location-header { font-size: 16px; padding: 10px; }
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  }
  .updated { text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px; }
</style>
</head>
<body>
<div class="container">
  <h1>${sched.label}</h1>
  <p class="subtitle">Employee Schedule</p>

  ${sjRows ? `<div class="location-header sj-header">St Joseph Schedule</div>
  <div class="table-wrap"><table>${headerRow}<tbody>${sjRows}</tbody></table></div>` : ''}

  ${cpRows ? `<div class="location-header cp-header">College Park Schedule</div>
  <div class="table-wrap"><table>${headerRow}<tbody>${cpRows}</tbody></table></div>` : ''}

  <p class="updated">Published ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}</p>
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sched.label.replace(/\s+/g, '_')}_Schedule.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyScheduleForEmail = () => {
    const sched = activeSchedule;
    const dayHeaders = days.map((d, i) => formatDayHeader(d, i));

    const thStyle = 'padding:6px 10px;text-align:center;border:1px solid #d1d5db;font-weight:600;font-size:13px;background:#f3f4f6;';
    const thLeftStyle = 'padding:6px 10px;text-align:left;border:1px solid #d1d5db;font-weight:600;font-size:13px;background:#f3f4f6;';
    const tdStyle = 'padding:6px 10px;text-align:center;border:1px solid #d1d5db;font-size:13px;';
    const tdNameStyle = 'padding:6px 10px;text-align:left;border:1px solid #d1d5db;font-weight:600;font-size:13px;';

    const headerRow = `<tr><th style="${thLeftStyle}">Employee</th>${dayHeaders.map(d => `<th style="${thStyle}">${d}</th>`).join('')}</tr>`;

    const buildTable = (employees, label, color) => {
      const scheduled = [...employees]
        .filter(emp => Object.values(emp.schedule).some(v => v && v.trim()))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (scheduled.length === 0) return '';
      const rows = scheduled.map((emp, idx) => {
        const bg = idx % 2 === 0 ? '#ffffff' : '#f9fafb';
        const cells = days.map(d => `<td style="${tdStyle}background:${bg};">${emp.schedule[d] || ''}</td>`).join('');
        return `<tr><td style="${tdNameStyle}background:${bg};">${emp.name}</td>${cells}</tr>`;
      }).join('');
      return `<h3 style="text-align:center;padding:10px;background:${color};border-radius:6px 6px 0 0;margin:24px 0 0 0;font-size:16px;">${label}</h3><table style="width:100%;border-collapse:collapse;margin:0 0 8px 0;">${headerRow}${rows}</table>`;
    };

    const sjTable = buildTable(sched.stJosephEmployees, 'St Joseph Schedule', '#dbeafe');
    const cpTable = buildTable(sched.collegeParkEmployees, 'College Park Schedule', '#dcfce7');

    const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:900px;">
<h2 style="text-align:center;margin-bottom:4px;">${sched.label}</h2>
<p style="text-align:center;color:#6b7280;margin-bottom:16px;font-size:13px;">Employee Schedule</p>
${sjTable}${cpTable}</div>`;

    // Copy using a hidden rendered div + selection (works in iframes/sandboxed environments)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'fixed';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    document.body.appendChild(tempDiv);

    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    try {
      document.execCommand('copy');
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus(null), 2500);
    } catch (err) {
      console.error('Copy failed:', err);
      // Last resort: try plain text
      try {
        const plain = buildPlainText(sched);
        const ta = document.createElement('textarea');
        ta.value = plain;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus(null), 2500);
      } catch (e2) {
        setCopyStatus('error');
        setTimeout(() => setCopyStatus(null), 2500);
      }
    }

    sel.removeAllRanges();
    document.body.removeChild(tempDiv);
  };

  const buildPlainText = (sched) => {
    const dayHeaders = days.map((d, i) => formatDayHeader(d, i));
    const pad = (s, len) => (s || '').padEnd(len);

    const buildSection = (employees, label) => {
      const scheduled = [...employees]
        .filter(emp => Object.values(emp.schedule).some(v => v && v.trim()))
        .sort((a, b) => a.name.localeCompare(b.name));
      if (scheduled.length === 0) return '';
      const nameW = Math.max(10, ...scheduled.map(e => e.name.length)) + 2;
      const colW = 16;
      let txt = `\n${label}\n${'─'.repeat(nameW + colW * 7)}\n`;
      txt += pad('Employee', nameW) + dayHeaders.map(d => pad(d, colW)).join('') + '\n';
      txt += '─'.repeat(nameW + colW * 7) + '\n';
      for (const emp of scheduled) {
        txt += pad(emp.name, nameW) + days.map(d => pad(emp.schedule[d] || '', colW)).join('') + '\n';
      }
      return txt;
    };

    return `${sched.label} - Employee Schedule\n${buildSection(sched.stJosephEmployees, 'ST JOSEPH SCHEDULE')}${buildSection(sched.collegeParkEmployees, 'COLLEGE PARK SCHEDULE')}`;
  };

  const createNewSchedule = () => {
    let nl; const dm=activeSchedule.label.match(/Week of (.+)/i);
    if(dm){try{const cd=new Date(dm[1]);if(!isNaN(cd.getTime())){const nw=new Date(cd);nw.setDate(nw.getDate()+7);nl=`Week of ${nw.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}`;}}catch(e){}}
    if(!nl)nl=`Week of ${new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}`;
    const ts=Date.now(),an=getAllEmployeeNames();
    const ns={id:ts,label:nl,published:false,stJosephEmployees:an.map((n,i)=>({id:ts+i*0.1,name:n,schedule:{}})),collegeParkEmployees:an.map((n,i)=>({id:ts+i*0.1+0.5,name:n,schedule:{}}))};
    setSchedules(p=>[...p,ns]);setActiveScheduleId(ts);setActiveView('schedules');
  };

  const deleteSchedule = (sid) => {
    if(schedules.length===1)return;const r=schedules.filter(s=>s.id!==sid);setSchedules(r);if(activeScheduleId===sid){setActiveScheduleId(r[0].id);setActiveView('schedules');}
  };

  const combinedData = getCombinedData();

  // Edit table — shows ALL employees
  const renderEditTable = (employees, location) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px] mb-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-1 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Employee</th>
              {days.map((d,i) => <th key={d} className="px-3 py-1 text-center font-semibold text-gray-700 border-r min-w-[144px] whitespace-nowrap">{formatDayHeader(d,i)}</th>)}
              <th className="px-3 py-1 text-center font-semibold text-gray-700 border-r min-w-[80px] whitespace-nowrap">Total</th>
              <th className="px-2 py-1 w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {[...employees].sort((a,b)=>a.name.localeCompare(b.name)).map((emp,idx) => (
              <tr key={emp.id} className={idx%2===0?'bg-white':'bg-gray-50'}>
                <td className="px-3 py-0.5 font-medium text-gray-800 border-r border-b whitespace-nowrap">
                  {emp.name}
                  {isTeamLead(emp.name) && <span className="ml-1.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0 rounded-full align-middle">TL</span>}
                </td>
                {days.map(d => (
                  <td key={d} className="px-1 py-0.5 border-r border-b">
                    <input type="text" value={emp.schedule[d]||''} onChange={e=>updateSchedule(location,emp.id,d,e.target.value)}
                      className="w-full px-1 py-0 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 whitespace-nowrap" />
                  </td>
                ))}
                <td className="px-3 py-0.5 text-center font-bold text-blue-600 border-r border-b whitespace-nowrap">{calculateWeekTotal(emp.schedule).toFixed(2)}h</td>
                <td className="px-1 py-0.5 text-center border-b">
                  <button onClick={()=>removeEmployee(location,emp.id)} className="p-0.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Published read-only table — only shows employees with hours
  const renderPublishedTable = (employees, locationLabel, bgColor) => {
    const scheduled = [...employees].filter(emp => calculateWeekTotal(emp.schedule) > 0).sort((a,b) => a.name.localeCompare(b.name));
    if (scheduled.length === 0) return null;
    return (
      <>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px] mb-8">
          <div className="overflow-x-auto">
            <table className="border-collapse">
              <thead>
                <tr>
                  <th colSpan={8} className={`${bgColor} py-2 text-center text-2xl font-bold text-gray-800`}>{locationLabel}</th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="px-2 py-1 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Employee</th>
                  {days.map((d,i) => <th key={d} className="px-1 py-1 text-center font-semibold text-gray-700 border-r whitespace-nowrap">{formatDayHeader(d,i)}</th>)}
                </tr>
              </thead>
              <tbody>
                {scheduled.map((emp,idx) => (
                  <tr key={emp.id} className={idx%2===0?'bg-white':'bg-gray-50'}>
                    <td className="px-2 py-0.5 font-semibold text-gray-800 border-r border-b whitespace-nowrap">
                      {emp.name}
                    </td>
                    {days.map(d => (
                      <td key={d} className="px-1 py-0.5 text-center border-r border-b text-gray-700 whitespace-nowrap">
                        {emp.schedule[d] || ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-[72%]">
      <div className="max-w-7xl mx-auto">

        {/* Published view */}
        {activeView === 'published' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setActiveView('schedules')} className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                <ArrowLeft size={18}/> Back to Editor
              </button>
              <div className="flex items-center gap-3">
                <button onClick={copyScheduleForEmail} className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition font-semibold text-sm">
                  {copyStatus === 'copied' ? <><Check size={16}/> Copied!</> : <><ClipboardCopy size={16}/> Copy for Email</>}
                </button>
                <button onClick={generateShareableHTML} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm">
                  <Download size={16}/> Download Page
                </button>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Published
                </span>
                <button onClick={unpublishSchedule} className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-semibold text-sm">
                  Unpublish
                </button>
              </div>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">{scheduleLabel}</h1>
              <p className="text-gray-500 mt-1">Employee Schedule</p>
            </div>

            {/* Week tabs for published view */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1 justify-center">
              {schedules.filter(s => s.published).map(s => (
                <button key={s.id} onClick={() => setActiveScheduleId(s.id)}
                  className={`px-4 py-2 rounded-lg transition whitespace-nowrap ${s.id===activeScheduleId?'bg-blue-600 text-white font-semibold shadow':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
                  {s.label}
                </button>
              ))}
            </div>

            {renderPublishedTable(stJosephEmployees, 'St Joseph Schedule', 'bg-blue-100')}
            {renderPublishedTable(collegeParkEmployees, 'College Park Schedule', 'bg-green-100')}
          </>
        )}

        {/* Editor views */}
        {activeView !== 'published' && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <button onClick={handleFileUpload} className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold">
                <Upload size={18}/> Import Excel
              </button>
              <button onClick={publishSchedule} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold">
                <Send size={18}/> Publish Schedule
              </button>
              {isPublished && (
                <button onClick={() => setActiveView('published')} className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-semibold text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> View Published
                </button>
              )}
            </div>

            {activeView!=='directory'&&activeView!=='payroll'&&activeView!=='vacation'&&(
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              <button onClick={createNewSchedule} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-t-lg hover:bg-green-600 transition whitespace-nowrap"><Copy size={16}/> New Schedule</button>
              {[...schedules].reverse().map(s => (
                <div key={s.id} className={`flex items-center gap-2 px-4 py-2 rounded-t-lg cursor-pointer transition whitespace-nowrap ${s.id===activeScheduleId?'bg-white font-semibold text-gray-800 border-t-2 border-x-2 border-blue-500':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
                  <span onClick={()=>{setActiveScheduleId(s.id);if(activeView==='published')setActiveView('schedules');}}>
                    {s.label}
                    {s.published && <span className="ml-1.5 inline-block w-2 h-2 bg-green-500 rounded-full"></span>}
                  </span>
                  {schedules.length>1&&<button onClick={e=>{e.stopPropagation();deleteSchedule(s.id);}} className="p-1 hover:bg-red-100 rounded"><X size={14}/></button>}
                </div>
              ))}
            </div>
            )}

            <div className="flex gap-1 mb-4">
              <button onClick={()=>setActiveView('schedules')} className={`px-5 py-2 rounded-lg font-semibold transition ${activeView==='schedules'?'bg-blue-600 text-white shadow':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Schedules</button>
              <button onClick={()=>setActiveView('payroll')} className={`px-5 py-2 rounded-lg font-semibold transition ${activeView==='payroll'?'bg-purple-600 text-white shadow':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Payroll</button>
              <button onClick={()=>setActiveView('vacation')} className={`px-5 py-2 rounded-lg font-semibold transition ${activeView==='vacation'?'bg-teal-600 text-white shadow':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Vacation Pay</button>
              <button onClick={()=>setActiveView('directory')} className={`flex items-center gap-1.5 px-5 py-2 rounded-lg font-semibold transition ${activeView==='directory'?'bg-amber-600 text-white shadow':'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}><Users size={16}/> Directory</button>
            </div>

            {activeView!=='directory'&&activeView!=='payroll'&&activeView!=='vacation'&&(
            <div className="mb-4">
              <input type="text" value={scheduleLabel} onChange={e=>updateScheduleLabel(e.target.value)}
                className="text-xl font-semibold text-gray-700 px-3 py-1 border-2 border-transparent hover:border-gray-300 focus:border-blue-500 rounded focus:outline-none transition" placeholder="Enter schedule label" />
            </div>
            )}

            {activeView==='schedules'&&(
              <>
                <div className="mb-6 flex gap-2 items-center">
                  <select value={selectedEmployeeToAdd} onChange={e => setSelectedEmployeeToAdd(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
                    <option value="">— Select employee to add —</option>
                    {getEmployeesNotOnSchedule().map(name => (
                      <option key={name} value={name}>{name}{isTeamLead(name) ? ' (TL)' : ''}</option>
                    ))}
                  </select>
                  <button onClick={addEmployeeFromDirectory} disabled={!selectedEmployeeToAdd}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-semibold ${selectedEmployeeToAdd ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                    <Plus size={20}/> Add to Schedule
                  </button>
                </div>

                <div className="mb-2 flex items-center justify-between bg-blue-100 py-3 px-4 rounded-t-lg">
                  <span className="text-2xl font-bold text-gray-800">St Joseph Schedule</span>
                  <button onClick={() => copyTableForExcel(stJosephEmployees, 'St Joseph')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition text-sm font-semibold ${sjCopyStatus==='copied'?'bg-green-500 text-white':'bg-white text-blue-700 hover:bg-blue-200 border border-blue-300'}`}>
                    {sjCopyStatus==='copied' ? <><Check size={14}/> Copied!</> : <><ClipboardCopy size={14}/> Copy for Excel</>}
                  </button>
                </div>
                {renderEditTable(stJosephEmployees, 'stJoseph')}

                <div className="mb-2 flex items-center justify-between bg-green-100 py-3 px-4 rounded-t-lg">
                  <span className="text-2xl font-bold text-gray-800">College Park Schedule</span>
                  <button onClick={() => copyTableForExcel(collegeParkEmployees, 'College Park')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition text-sm font-semibold ${cpCopyStatus==='copied'?'bg-green-500 text-white':'bg-white text-green-700 hover:bg-green-200 border border-green-300'}`}>
                    {cpCopyStatus==='copied' ? <><Check size={14}/> Copied!</> : <><ClipboardCopy size={14}/> Copy for Excel</>}
                  </button>
                </div>
                {renderEditTable(collegeParkEmployees, 'collegePark')}

                <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                  <strong>Format:</strong> Enter times as "9:00 am - 5:00 pm", "5:30-12:15am", or "4pm-8pm, 9:30pm-11pm" for split shifts.
                </div>
              </>
            )}

            {activeView==='payroll'&&(
              <>
                <div className="mb-2 text-2xl font-bold text-gray-800 text-center bg-purple-100 py-2 rounded-t-lg">Payroll Summary</div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px] mb-4">
                  <div className="p-4 bg-purple-50 border-b">
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">Select weeks:</label>
                      <select multiple value={[...payrollWeeks].map(String)} onChange={e => {
                        const selected = new Set([...e.target.selectedOptions].map(o => Number(o.value)));
                        setPayrollWeeks(selected);
                      }} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" style={{minHeight:'80px'}}>
                        {[...schedules].reverse().map(s => (
                          <option key={s.id} value={s.id}>{s.label.replace(' (Auto-Generated Draft)','')}</option>
                        ))}
                      </select>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Hold Ctrl/Cmd to select multiple weeks. {payrollWeeks.size} week{payrollWeeks.size !== 1 ? 's' : ''} selected.</p>
                  </div>
                  {payrollWeeks.size > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Employee</th>
                            <th className="px-4 py-2 text-center font-semibold text-blue-700 border-r whitespace-nowrap min-w-[100px]">SJ Hours</th>
                            <th className="px-4 py-2 text-center font-semibold text-green-700 border-r whitespace-nowrap min-w-[100px]">CP Hours</th>
                            <th className="px-4 py-2 text-center font-semibold text-purple-700 border-r whitespace-nowrap min-w-[100px]">Total Hours</th>
                            <th className="px-4 py-2 text-center font-semibold text-red-700 whitespace-nowrap min-w-[100px]">Holiday Pay</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getPayrollData().map((emp, idx) => (
                            <tr key={emp.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-4 py-1.5 font-medium text-gray-800 border-r border-b whitespace-nowrap">
                                {emp.name}
                                {isTeamLead(emp.name) && <span className="ml-1.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0 rounded-full align-middle">TL</span>}
                              </td>
                              <td className="px-4 py-1.5 text-center font-semibold text-blue-600 border-r border-b whitespace-nowrap">{emp.sjHours > 0 ? `${emp.sjHours.toFixed(2)}h` : '—'}</td>
                              <td className="px-4 py-1.5 text-center font-semibold text-green-600 border-r border-b whitespace-nowrap">{emp.cpHours > 0 ? `${emp.cpHours.toFixed(2)}h` : '—'}</td>
                              <td className="px-4 py-1.5 text-center font-extrabold text-purple-700 border-r border-b whitespace-nowrap">{emp.totalHours.toFixed(2)}h</td>
                              <td className="px-4 py-1.5 text-center font-semibold text-red-600 border-b whitespace-nowrap">{emp.holidayHours > 0 ? `${emp.holidayHours.toFixed(2)}h` : '—'}</td>
                            </tr>
                          ))}
                          <tr className="bg-gray-100 font-bold">
                            <td className="px-4 py-2 text-gray-800 border-r border-t-2 whitespace-nowrap">Grand Total</td>
                            <td className="px-4 py-2 text-center text-blue-700 border-r border-t-2 whitespace-nowrap">{getPayrollData().reduce((s, e) => s + e.sjHours, 0).toFixed(2)}h</td>
                            <td className="px-4 py-2 text-center text-green-700 border-r border-t-2 whitespace-nowrap">{getPayrollData().reduce((s, e) => s + e.cpHours, 0).toFixed(2)}h</td>
                            <td className="px-4 py-2 text-center text-purple-800 border-r border-t-2 whitespace-nowrap">{getPayrollData().reduce((s, e) => s + e.totalHours, 0).toFixed(2)}h</td>
                            <td className="px-4 py-2 text-center text-red-800 border-t-2 whitespace-nowrap">{getPayrollData().reduce((s, e) => s + e.holidayHours, 0).toFixed(2)}h</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">Select at least one week to see payroll data.</div>
                  )}
                </div>

                {/* Tip Distribution Calculator */}
                {payrollWeeks.size > 0 && (() => {
                  const data = getPayrollData();
                  const totalSjHours = data.reduce((s, e) => s + e.sjHours, 0);
                  const totalCpHours = data.reduce((s, e) => s + e.cpHours, 0);
                  const sjTipNum = parseFloat(sjTips) || 0;
                  const cpTipNum = parseFloat(cpTips) || 0;
                  const sjRate = totalSjHours > 0 ? sjTipNum / totalSjHours : 0;
                  const cpRate = totalCpHours > 0 ? cpTipNum / totalCpHours : 0;
                  const hasTips = sjTipNum > 0 || cpTipNum > 0;

                  return (
                    <div className="mt-6">
                      <div className="mb-2 text-2xl font-bold text-gray-800 text-center bg-emerald-100 py-2 rounded-t-lg">Tip Distribution</div>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px]">
                        <div className="p-4 bg-emerald-50 border-b">
                          <div className="flex flex-wrap gap-4 items-end">
                            <div className="flex-1 min-w-[180px]">
                              <label className="block text-sm font-semibold text-blue-700 mb-1">St Joseph Tips ($)</label>
                              <input type="number" value={sjTips} onChange={e => setSjTips(e.target.value)} placeholder="0.00" step="0.01" min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg font-semibold" />
                            </div>
                            <div className="flex-1 min-w-[180px]">
                              <label className="block text-sm font-semibold text-green-700 mb-1">College Park Tips ($)</label>
                              <input type="number" value={cpTips} onChange={e => setCpTips(e.target.value)} placeholder="0.00" step="0.01" min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg font-semibold" />
                            </div>
                            <div className="flex-1 min-w-[180px] bg-emerald-100 rounded-lg px-4 py-2">
                              <div className="text-xs text-gray-600">Combined Total</div>
                              <div className="text-xl font-bold text-emerald-700">${(sjTipNum + cpTipNum).toFixed(2)}</div>
                            </div>
                          </div>
                          {hasTips && (
                            <div className="flex gap-4 mt-3 text-xs text-gray-500">
                              {sjTipNum > 0 && <span>SJ rate: <strong>${sjRate.toFixed(4)}/hr</strong> ({totalSjHours.toFixed(1)}h total)</span>}
                              {cpTipNum > 0 && <span>CP rate: <strong>${cpRate.toFixed(4)}/hr</strong> ({totalCpHours.toFixed(1)}h total)</span>}
                            </div>
                          )}
                        </div>
                        {hasTips ? (
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-gray-100">
                                <tr>
                                  <th className="px-4 py-2 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Employee</th>
                                  <th className="px-4 py-2 text-center font-semibold text-blue-700 border-r whitespace-nowrap min-w-[90px]">SJ Tips</th>
                                  <th className="px-4 py-2 text-center font-semibold text-green-700 border-r whitespace-nowrap min-w-[90px]">CP Tips</th>
                                  <th className="px-4 py-2 text-center font-semibold text-emerald-700 whitespace-nowrap min-w-[100px]">Total Tips</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.filter(e => e.sjHours > 0 || e.cpHours > 0).map((emp, idx) => {
                                  const empSjTip = emp.sjHours * sjRate;
                                  const empCpTip = emp.cpHours * cpRate;
                                  const empTotal = empSjTip + empCpTip;
                                  return (
                                    <tr key={emp.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      <td className="px-4 py-1.5 font-medium text-gray-800 border-r border-b whitespace-nowrap">
                                        {emp.name}
                                        {isTeamLead(emp.name) && <span className="ml-1.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0 rounded-full align-middle">TL</span>}
                                      </td>
                                      <td className="px-4 py-1.5 text-center font-semibold text-blue-700 border-r border-b whitespace-nowrap">{empSjTip > 0 ? `$${empSjTip.toFixed(2)}` : '—'}</td>
                                      <td className="px-4 py-1.5 text-center font-semibold text-green-700 border-r border-b whitespace-nowrap">{empCpTip > 0 ? `$${empCpTip.toFixed(2)}` : '—'}</td>
                                      <td className="px-4 py-1.5 text-center font-extrabold text-emerald-700 border-b whitespace-nowrap">${empTotal.toFixed(2)}</td>
                                    </tr>
                                  );
                                })}
                                <tr className="bg-gray-100 font-bold">
                                  <td className="px-4 py-2 text-gray-800 border-r border-t-2 whitespace-nowrap">Total</td>
                                  <td className="px-4 py-2 text-center text-blue-700 border-r border-t-2 whitespace-nowrap">${sjTipNum.toFixed(2)}</td>
                                  <td className="px-4 py-2 text-center text-green-700 border-r border-t-2 whitespace-nowrap">${cpTipNum.toFixed(2)}</td>
                                  <td className="px-4 py-2 text-center text-emerald-800 border-t-2 whitespace-nowrap">${(sjTipNum + cpTipNum).toFixed(2)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="p-8 text-center text-gray-500">Enter tip amounts above to calculate distribution.</div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </>
            )}

            {activeView==='vacation'&&(
              <>
                <div className="mb-2 text-2xl font-bold text-gray-800 text-center bg-teal-100 py-2 rounded-t-lg">Vacation Pay Calculator</div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px] mb-4">
                  <div className="p-4 bg-teal-50 border-b">
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">Vacation date:</label>
                      <input type="date" value={vacationDate} onChange={e => setVacationDate(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-semibold" />
                    </div>
                    {(() => {
                      const vd = getVacationData();
                      return (
                        <>
                          <p className="text-xs text-gray-500 mt-2">
                            {(() => { const vd = getVacationData(); const fmt = d => d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}); return `Counting hours from ${fmt(vd.startDate)} to ${fmt(new Date(new Date(vacationDate+'T12:00:00').getTime()-86400000))} (28 days) ÷ 20`; })()}
                          </p>
                          {vd.weeks.length > 0 && (
                            <p className="text-xs text-teal-700 mt-1 font-medium">Weeks included: {vd.weeks.join(', ')}</p>
                          )}
                          {vd.weeks.length === 0 && (
                            <p className="text-xs text-orange-600 mt-1 font-medium">No schedule weeks found in the 4-week period before this date.</p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                  {(() => {
                    const vd = getVacationData();
                    return vd.employees.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Employee</th>
                              <th className="px-4 py-2 text-center font-semibold text-gray-700 border-r whitespace-nowrap min-w-[120px]">Total Hours (4 wks)</th>
                              <th className="px-4 py-2 text-center font-semibold text-teal-700 whitespace-nowrap min-w-[130px]">Vacation Pay (hrs)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vd.employees.map((emp, idx) => (
                              <tr key={emp.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-4 py-1.5 font-medium text-gray-800 border-r border-b whitespace-nowrap">
                                  {emp.name}
                                  {isTeamLead(emp.name) && <span className="ml-1.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0 rounded-full align-middle">TL</span>}
                                </td>
                                <td className="px-4 py-1.5 text-center font-semibold text-gray-700 border-r border-b whitespace-nowrap">{emp.totalHours.toFixed(2)}h</td>
                                <td className="px-4 py-1.5 text-center font-extrabold text-teal-700 border-b whitespace-nowrap">{emp.vacationPay.toFixed(2)}h</td>
                              </tr>
                            ))}
                            <tr className="bg-gray-100 font-bold">
                              <td className="px-4 py-2 text-gray-800 border-r border-t-2 whitespace-nowrap">Total</td>
                              <td className="px-4 py-2 text-center text-gray-700 border-r border-t-2 whitespace-nowrap">{vd.employees.reduce((s, e) => s + e.totalHours, 0).toFixed(2)}h</td>
                              <td className="px-4 py-2 text-center text-teal-800 border-t-2 whitespace-nowrap">{vd.employees.reduce((s, e) => s + e.vacationPay, 0).toFixed(2)}h</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center text-gray-500">No data for the selected period. Choose a date with schedule data in the prior 4 weeks.</div>
                    );
                  })()}
                </div>
              </>
            )}

            {activeView==='directory'&&(
              <>
                <div className="mb-2 text-2xl font-bold text-gray-800 text-center bg-amber-100 py-2 rounded-t-lg">Employee Directory</div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-[14px] mb-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-1.5 text-left font-semibold text-gray-700 border-r whitespace-nowrap w-[140px]">Name</th>
                          <th className="px-3 py-1.5 text-center font-semibold text-gray-700 border-r whitespace-nowrap w-[120px]">Role</th>
                          <th className="px-3 py-1.5 text-center font-semibold text-gray-700 border-r whitespace-nowrap w-[140px]">Preferred Store</th>
                          <th className="px-3 py-1.5 text-center font-semibold text-gray-700 border-r whitespace-nowrap w-[140px]">Shift Preference</th>
                          <th className="px-3 py-1.5 text-left font-semibold text-gray-700 border-r whitespace-nowrap">Notes / Conditions</th>
                          <th className="px-2 py-1.5 w-[40px]"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {getAllEmployeeNames().map((name, idx) => {
                          const emp = getEmployee(name);
                          return (
                            <tr key={name} className={idx%2===0?'bg-white':'bg-gray-50'}>
                              <td className="px-3 py-1 font-semibold text-gray-800 border-r border-b whitespace-nowrap">
                                {name}
                                {emp.role === 'Team Lead' && <span className="ml-1.5 text-[10px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0 rounded-full align-middle">TL</span>}
                              </td>
                              <td className="px-1 py-1 border-r border-b text-center">
                                <select value={emp.role || 'Employee'} onChange={e => updateDir(name, {role: e.target.value})}
                                  className={`w-full px-1 py-0.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 text-center ${emp.role==='Team Lead'?'bg-amber-50 font-semibold text-amber-700':''}`}>
                                  <option value="Employee">Employee</option>
                                  <option value="Team Lead">Team Lead</option>
                                </select>
                              </td>
                              <td className="px-1 py-1 border-r border-b text-center">
                                <select value={emp.preferredStore || 'any'} onChange={e => updateDir(name, {preferredStore: e.target.value})}
                                  className="w-full px-1 py-0.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 text-center">
                                  <option value="any">Either Store</option>
                                  <option value="sj">St Joseph</option>
                                  <option value="cp">College Park</option>
                                </select>
                              </td>
                              <td className="px-1 py-1 border-r border-b text-center">
                                <select value={emp.shiftPreference || 'any'} onChange={e => updateDir(name, {shiftPreference: e.target.value})}
                                  className="w-full px-1 py-0.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 text-center">
                                  <option value="any">Any Shift</option>
                                  <option value="open">Opening Only</option>
                                  <option value="close">Closing Only</option>
                                  <option value="mid">Mid / Helper Only</option>
                                </select>
                              </td>
                              <td className="px-1 py-1 border-r border-b">
                                <input type="text" value={emp.notes || ''} onChange={e => updateDir(name, {notes: e.target.value})}
                                  placeholder="e.g. Max 3 shifts/week, no Sundays..."
                                  className="w-full px-2 py-0.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500" />
                              </td>
                              <td className="px-1 py-1 text-center border-b">
                                <button onClick={()=>removeFromDirectory(name)} className="p-0.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition" title="Remove from directory"><Trash2 size={15}/></button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input type="text" value={newEmployeeName} onChange={e=>setNewEmployeeName(e.target.value)} onKeyPress={e=>{if(e.key==='Enter'&&newEmployeeName.trim()){updateDir(newEmployeeName.trim(),{role:'Employee',preferredStore:'any',shiftPreference:'any',notes:''});setNewEmployeeName('');}}} placeholder="Add new employee to directory"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <button onClick={()=>{if(newEmployeeName.trim()){updateDir(newEmployeeName.trim(),{role:'Employee',preferredStore:'any',shiftPreference:'any',notes:''});setNewEmployeeName('');}}} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"><Plus size={20}/> Add</button>
                  <button onClick={copyDirectoryToClipboard} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-semibold whitespace-nowrap ${dirCopyStatus==='copied'?'bg-green-500 text-white':'bg-purple-500 text-white hover:bg-purple-600'}`}>
                    {dirCopyStatus==='copied' ? <><Check size={18}/> Copied!</> : <><ClipboardCopy size={18}/> Copy Directory</>}
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-600 bg-amber-50 p-4 rounded-lg">
                  <strong>Tip:</strong> Use <strong>Copy Directory</strong> to share your current settings with Claude for schedule generation. Set roles and preferences here — Team Lead badges will appear on schedule views.
                </div>

                <div className="mt-4">
                  <div className="text-lg font-bold text-gray-800 bg-gray-100 py-2 px-4 rounded-t-lg">Scheduling Rules</div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-4 text-sm space-y-3">
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">Store Staffing Template (Mon–Thu)</div>
                      <div className="text-gray-600 ml-2">Each store per day: 1 TL opener → 1 TL closer → 1 helper</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">Store Staffing Template (Fri–Sun)</div>
                      <div className="text-gray-600 ml-2">Each store per day: 1 TL opener → 1 TL closer → 2 helpers</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-700 mb-1">St Joseph — Helper Shifts</div>
                      <div className="grid grid-cols-2 gap-1 ml-2 text-gray-600">
                        <span>Mon & Tue:</span><span className="font-medium">7pm–12:15am (1 helper)</span>
                        <span>Wed & Thu:</span><span className="font-medium">6pm–12:15am (1 helper)</span>
                        <span>Fri:</span><span className="font-medium">5pm–10pm + 7pm–12:15am</span>
                        <span>Sat & Sun:</span><span className="font-medium">3pm–10pm + 7pm–12:15am</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 mb-1">College Park — Helper Shifts</div>
                      <div className="grid grid-cols-2 gap-1 ml-2 text-gray-600">
                        <span>Mon & Tue:</span><span className="font-medium">6pm–11:15pm (1 helper)</span>
                        <span>Wed & Thu:</span><span className="font-medium">5pm–11:15pm (1 helper)</span>
                        <span>Fri:</span><span className="font-medium">3pm–9pm + 6pm–11:15pm</span>
                        <span>Sat & Sun:</span><span className="font-medium">2pm–9pm + 6pm–11:15pm</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">General Rules</div>
                      <div className="text-gray-600 ml-2">• Only 1 TL during the day per store</div>
                      <div className="text-gray-600 ml-2">• No opening shift after a 12:15am close the night before</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">Fixed Schedules</div>
                      <div className="text-gray-600 ml-2">• Wilson: Mon opening (either store), Wed closing at CP, Fri opening (either store). One of Mon/Fri must be at SJ.</div>
                      <div className="text-gray-600 ml-2">• Peter: Opens Mon at whichever store Wilson is not at.</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
