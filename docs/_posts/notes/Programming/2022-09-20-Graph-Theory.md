---
layout: post
title:  "Graph Theory"
date:   2022-08-20 18:41:19 +0530
categories: programming
author: "Akilax0"

---
# Graph Theory

# BFS

Start with a node 

## Algorithm

1. Create a queue and enqueue source into it 
    1. Mark the source as visited
2. While queue is not empty .
    1. dequeue a vertex from queue → f
    2. Print f
    3. Enqueue all not yet visited adjacent of f and mark them visited. 
    

## Implementation

```cpp
#include<bits/stdc++.h>
#define pb push_back

using namespace std;

vector<bool>v;
vector<vector<int> > g;

void edge(int a,int b){
    g[a].pb(b);

    //for undirected graph 
    // g[b].pb(a);
}

void bfs(int u){
    queue<int> q;

    q.push(u);
    v[u] = true;

    while(!q.empty()){

        int f = q.front();
        q.pop();
        cout<< f<< " ";

        //Enqeue all adjacent 
        for(auto i=g[f].begin();i!=g[f].end();i++){
            if(!v[*i]){
                q.push(*i);
            v[*i]=true;
            }
        }
    }
}

int main(){

/*Input:

8 10
0 1
0 2
0 3
0 4
1 5
2 5
3 6
4 6
5 7
6 7

Output:
0 1 2 3 4 5 6 7

*/

    int n, e;
    cin >> n >> e;
 
    v.assign(n, false);
    g.assign(n, vector<int>());
 
    int a, b;
    for (int i = 0; i < e; i++) {
        cin >> a >> b;
        edge(a, b);
    }
 
    for (int i = 0; i < n; i++) {
        if (!v[i])
            bfs(i);
    }

    return 0;
}
```

## Complexity

**time** :  O(V+E) 

O(n) n number of nodes n the tree 

**space** : O(V) since worst case have to hold all vertices in queue

O(l) l maximum number of nodes in a single level

# DFS

## Algorithm

Create recursive function takes the index of node and a visited array.

1. Mark current node as visited and print
2. Traverse all adjacent unmarked nodes and call recursive function with index of adjacent node. 

## Implementation

```cpp
#include<bits/stdc++.h>
#define pb push_back

using namespace std;

vector<bool>v;
vector<vector<int> > g;

void edge(int a,int b){
    g[a].pb(b);

    //for undirected graph 
    // g[b].pb(a);
}

void dfs(int u){
   
    v[u] = true;
    cout<< u << " ";

   //iterate through all neighbours
    for(auto i=g[u].begin();i!=g[u].end();i++){
        if(!v[*i]){
            dfs(*i);
        }
    }
    
}

int main(){

/*Input:

4 6
0 1
0 2
1 2
2 0
2 3
3 3

Output:
2 0 1 3

*/

    int n, e;
    cin >> n >> e;
 
    v.assign(n, false);
    g.assign(n, vector<int>());
 
    int a, b;
    for (int i = 0; i < e; i++) {
        cin >> a >> b;
        edge(a, b);
    }
 
 
    //starting from node 2
    dfs(2);
    

    return 0;
}
```

## Complexity

**time** : O(V+E) 

O(n) n number of nodes n the tree 

**space** : O(V) since an extra visited array of size V required

: O(d) d maximum depth of tree

# Dijkstra

## Algorithm

1. Create a set as sptSet (shortest path tree set) keeps track of vertices included in the shortest path tree whose minimum distance from the source is calculated and finalized. Initially empty.
2. Assign a distance value to all vertices in the input graph Initialize all distance values to INF . Assign distance value as 0 for the source vertex so that it is picked first. 
3. while sptSet doesn't include all vertices
    1. pick u not in sptSet and minimum distance value
    2. include u to sptSet
    3. update distance value of all adjacent vertices of u Iterate through adjacent vertices. For each adjacent vertex v if the sum of distance value u (from src) and weight of u-v less than distance value of v then update. 

## Implementation

NOTE: Please update this code

```cpp
#include<bits/stdc++.h>
#define pb push_back

using namespace std;

// number of vertices
#define V 9 

int minDistance(int dist[], bool sptSet[])
{
   
    // Initialize min value
    int min = INT_MAX, min_index;
 
    for (int v = 0; v < V; v++)
        if (sptSet[v] == false && dist[v] <= min)
            min = dist[v], min_index = v;
 
    return min_index;
}
 
// A utility function to print the constructed distance array
void printSolution(int dist[])
{
    cout <<"Vertex \t Distance from Source" << endl;
    for (int i = 0; i < V; i++)
        cout  << i << " \t\t"<<dist[i]<< endl;
}
 
// Function that implements Dijkstra's single source shortest path algorithm
// for a graph represented using adjacency matrix representation
void dijkstra(int graph[V][V], int src)
{
    int dist[V]; // The output array.  dist[i] will hold the shortest
    // distance from src to i
 
    bool sptSet[V]; // sptSet[i] will be true if vertex i is included in shortest
    // path tree or shortest distance from src to i is finalized
 
    // Initialize all distances as INFINITE and stpSet[] as false
    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX, sptSet[i] = false;
 
    // Distance of source vertex from itself is always 0
    dist[src] = 0;
 
    // Find shortest path for all vertices
    for (int count = 0; count < V - 1; count++) {
        // Pick the minimum distance vertex from the set of vertices not
        // yet processed. u is always equal to src in the first iteration.
        int u = minDistance(dist, sptSet);
 
        // Mark the picked vertex as processed
        sptSet[u] = true;
 
        // Update dist value of the adjacent vertices of the picked vertex.
        for (int v = 0; v < V; v++)
 
            // Update dist[v] only if is not in sptSet, there is an edge from
            // u to v, and total weight of path from src to  v through u is
            // smaller than current value of dist[v]
            if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
                && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
 
    // print the constructed distance array
    printSolution(dist);
}
 
// driver program to test above function
int main()
{
   
    /* Let us create the example graph discussed above */
    int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                        { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                        { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                        { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                        { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                        { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                        { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                        { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                        { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
 
    dijkstra(graph, 0);
 
    return 0;
}
```

## Complexity

**time** : O(V^2)

**space** : O(V)

# Kruskal

Given undirected , connected and weighted graph find Minimum Spanning Tree (MST) of the graph..

## Algorithm

Steps for finding MST usign Kruskal’s algorithm 

1. Sort all edges in non-decreasing order of their weight
2. Pick the smallest edge. Check if it forms a cycle with current spanning tree. If not include the edge.
3. Repeat step 2 until (V-1) edges in the spanning tree

For C++ implementation 

1. Use vector of edges for all edges in graph and wach item of a vector containing 3 parameters. 
    1. source
    2. destination
    3. cost 
    
    ```cpp
    vector<pair<int, pair<int,int>> edges;
    ```
    
2. outer pair → cost , inner pair→ edges
3. built in sort can be used for edges in non decreasing order.
4. Union find algorithm to check if current edge forms a cycle if it is added in the current MST. If so discard.

## Pseudo Code

```cpp
//Initialize result
mst_weight = 0;

//create V single item sets
for each vertex v
	parent[v] = v;
	rank[v] = 0;

//sort all edges into non decreasing order by weight w

for each (u,v) taken from the sorted list E
	do if FIND-SET(u) != FIND-SET(v)
		print edge(u,v)
		mst_weight += weight of edge(u,v)
		UNION(u,v)
```

## Implementation

```cpp
#include<bits/stdc++.h>
using namespace std;

typedef pair<int,int> iPair;

struct Graph{
    int V,E;
    vector<pair<int,iPair>> edges;

    //constructor
    Graph(int V, int E){
        this->V = V ;
        this-> E = E;
    }

    //utility function add edge
    void addEdge(int u, int v, int w){
        edges.push_back({w,{u,v}});
    }
    // function to find MST using kruskal
    int kruskalMST();
};

// To represent Disjoint Sets
struct DisjointSets{
    int *parent, *rnk;
    int n;

    //constructor
    DisjointSets(int n){
        //allocate memory
        this-> n = n;
        parent = new int[n+1];
        rnk = new int[n+1];

        //intially all verices are in 
        // different sets and have rank 0

        for(int i=0;i<=n;i++){
            rnk[i]=0;

            //every element is parent of itself
            parent[i] = i;
        }
    }
       // Find the parent of a node 'u'
    // Path Compression
    int find(int u)
    {
        /* Make the parent of the nodes in the path
        from u--> parent[u] point to parent[u] */
        if (u != parent[u])
            parent[u] = find(parent[u]);
        return parent[u];
    }
  
    // Union by rank
    void merge(int x, int y)
    {
        x = find(x), y = find(y);
  
        /* Make tree with smaller height
        a subtree of the other tree */
        if (rnk[x] > rnk[y])
            parent[y] = x;
        else // If rnk[x] <= rnk[y]
            parent[x] = y;
  
        if (rnk[x] == rnk[y])
            rnk[y]++;
    }
};

/* Functions returns weight of the MST*/
  
int Graph::kruskalMST()
{
    int mst_wt = 0; // Initialize result
  
    // Sort edges in increasing order on basis of cost
    sort(edges.begin(), edges.end());
  
    // Create disjoint sets
    DisjointSets ds(V);
  
    // Iterate through all sorted edges
    vector< pair<int, iPair> >::iterator it;
    for (it=edges.begin(); it!=edges.end(); it++)
    {
        int u = it->second.first;
        int v = it->second.second;
  
        int set_u = ds.find(u);
        int set_v = ds.find(v);
  
        // Check if the selected edge is creating
        // a cycle or not (Cycle is created if u
        // and v belong to same set)
        if (set_u != set_v)
        {
            // Current edge will be in the MST
            // so print it
            cout << u << " - " << v << endl;
  
            // Update MST weight
            mst_wt += it->first;
  
            // Merge two sets
            ds.merge(set_u, set_v);
        }
    }
  
    return mst_wt;
}
  
// Driver program to test above functions
int main()
{
    /* Let us create above shown weighted
    and undirected graph */
    int V = 9, E = 14;
    Graph g(V, E);
  
    // making above shown graph
    g.addEdge(0, 1, 4);
    g.addEdge(0, 7, 8);
    g.addEdge(1, 2, 8);
    g.addEdge(1, 7, 11);
    g.addEdge(2, 3, 7);
    g.addEdge(2, 8, 2);
    g.addEdge(2, 5, 4);
    g.addEdge(3, 4, 9);
    g.addEdge(3, 5, 14);
    g.addEdge(4, 5, 10);
    g.addEdge(5, 6, 2);
    g.addEdge(6, 7, 1);
    g.addEdge(6, 8, 6);
    g.addEdge(7, 8, 7);
  
    cout << "Edges of MST are \n";
    int mst_wt = g.kruskalMST();
  
    cout << "\nWeight of MST is " << mst_wt;
  
    return 0;
}

```

## Complexity

**time** O(ElogE) or O(ElogV) 

sortign edges → O(ElogE)

iterate though all edges and apply the find-union algorithm → O(logV) 

overall complexity O(ElogE + ElogV) 

E can be at most O(v^2) so O(logE) and O(logV) are the same

# Prims

#