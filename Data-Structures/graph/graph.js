/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this._adjancyList = new Map();
  }
  addVertex(vertex) {
    this._adjancyList.set(vertex, []);
    return vertex;
  }
  addDirectedEdge(startVertex, endVertex, weight) {
    if (
      !this._adjancyList.has(startVertex) ||
      !this._adjancyList.has(endVertex)
    ) {
      return 'Vertex not found';
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }
    return null;
  }
  GetNodes() {
    let nodes = [];
    for (const [vertex] of this._adjancyList.entries()) {
      nodes.push(vertex);
    }
    return nodes.length === 0 ? null : nodes;
  }

  size() {
    let counter = 0;
    for (const [vertex] of this._adjancyList.entries()) {
      counter++;
    }
    return counter;
  }
}
module.exports = { Graph, Vertex };
