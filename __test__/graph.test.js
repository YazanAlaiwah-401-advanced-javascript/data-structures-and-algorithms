/* eslint-disable no-undef */
'use strict';
const { Graph, Vertex } = require('../Data-Structures/graph/graph.js');
describe('GRAPGH MODUEL', () => {
  const graph = new Graph();
  let seven = new Vertex(7);
  let three = new Vertex(3);
  it('Node can be successfully added to the graph', () => {
    graph.addVertex(seven);
    expect(graph.size()).toEqual(1);
  });
  it('An edge can be successfully added to the graph', () => {
    graph.addVertex(three);
    graph.addDirectedEdge(seven, three);
    expect(graph.getNeighbors(seven)[0]).toMatchObject({
      vertex: { value: 3 },
      weight: 0,
    });
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(graph.GetNodes()).toEqual([{ value: 7 }, { value: 3 }]);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    expect(graph.getNeighbors(seven)[0]).toMatchObject({
      vertex: { value: 3 },
      weight: 0,
    });
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    expect(graph.getNeighbors(seven)[0]).toMatchObject({
      vertex: { value: 3 },
      weight: 0,
    });
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toEqual(2);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    expect(graph.getNeighbors(seven)[0]).toMatchObject({
      vertex: { value: 3 },
      weight: 0,
    });
  });
  it('An empty graph properly returns null', () => {
    let graph2 = new Graph();
    expect(graph2.GetNodes()).toEqual(null);
  });
});
