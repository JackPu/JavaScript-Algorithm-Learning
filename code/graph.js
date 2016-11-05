/**
* graph https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E5%AD%A6)#.E5.9B.BE.E7.9A.84.E5.AD.98.E5.82.A8.E8.A1.A8.E7.A4.BA
**/

class Vertex() {
  constructor(labrl,isVisited) {
    this.label = label;
    this.isVisited = isVisited;
  }
}

class Graph(v) {
  constructor() {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for(let i=0;i<v;++i) {
      this.adj[i] = [];
      this.adj[i].push('');
      this.marked[i] = false;
    }
    
    
  }
  
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  
  showGrap() {
    for(let i=0;i<this.vertices;i++) {
      console.log(i + '->');
      for(let j=0;j<this.vertices;++j) {
        if(this.adj[i][j] != undefined) {
          console.log(this.adj[i][j] + ' ');
        }
      }
    }
  }
  
  dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] != undefined) {
      for(let j in this.adj[v]) {
        if(!this.marked[j]) {
          this.dfs(w);  
        }  
      }
    }
  }
  
  bfs(s) {
    let q = [];
    this.marked[s] = true;
    q.push(s);
    while(q.length>0) {
      let v = q.shift();
      if(this.adj[v]!= undefined) {
        //
      }
      for(let j in this.adj[v]) {
        if(!this.marked[j]) {
          this.marked[j] = true;
          q.push(j);
        }
        
      }
    }
  }
  
}


