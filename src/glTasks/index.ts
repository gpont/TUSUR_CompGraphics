import { GlPrimitives } from '../glUtils/types';

import glLinesAndTrianglesHof from './glLinesAndTrianglesHof';
import glPoints from './glPoints';
import task1 from './task1';
import { TaskFunc } from './types';

const tasks: {
  [name: string]: TaskFunc;
} = {
  'Lab 1': task1,
  [GlPrimitives.GL_POINTS]: glPoints,
  [GlPrimitives.GL_LINES]: glLinesAndTrianglesHof(GlPrimitives.GL_LINES),
  [GlPrimitives.GL_LINE_STRIP]: glLinesAndTrianglesHof(GlPrimitives.GL_LINE_STRIP),
  [GlPrimitives.GL_LINE_LOOP]: glLinesAndTrianglesHof(GlPrimitives.GL_LINE_LOOP),
  [GlPrimitives.GL_TRIANGLES]: glLinesAndTrianglesHof(GlPrimitives.GL_TRIANGLES),
  [GlPrimitives.GL_TRIANGLE_STRIP]: glLinesAndTrianglesHof(GlPrimitives.GL_TRIANGLE_STRIP),
  [GlPrimitives.GL_TRIANGLE_FAN]: glLinesAndTrianglesHof(GlPrimitives.GL_TRIANGLE_FAN),
};

export default tasks;
