import { bindShadersToBuffers, initBuffers, initShaderProgram } from '../glUtils';
import fragmentShader from '../shaders/fragment/task1';
import vertexShader from '../shaders/vertex/task1';

import { TaskFuncBaseProps } from './types';

export default (props: TaskFuncBaseProps) => {
  const { gl } = props;

  const vertices = [
    -0.5, 0.5, 0.0,
    0.0, 0.5, 0.0,
    -0.25, -0.25, 0.0,
  ];

  const colors = [
    1.0, 1.0, 1.0, 1.0, // white
    1.0, 0.0, 0.0, 1.0, // red
    0.0, 1.0, 0.0, 1.0, // green
    0.0, 0.0, 1.0, 1.0, // blue
  ];

  const buffers = initBuffers(gl, vertices, colors);

  const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);
  gl.useProgram(shaderProgram);

  const shadersInfo = [{
    location: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    numberComponents: 3,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0,
    // TODO: May be null in some cases
    buffer: buffers.position as WebGLBuffer,
  }, {
    location: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    numberComponents: 3,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0,
    buffer: buffers.color as WebGLBuffer,
  }];

  bindShadersToBuffers(gl, shadersInfo);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
};
