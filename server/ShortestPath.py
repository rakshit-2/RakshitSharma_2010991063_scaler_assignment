import sys

def Dis(arr,s):
    def finder(dis,vis):
        minn=sys.maxsize
        minnVer=-1
        for i in range(len(dis)):
            if(not vis[i] and dis[i]<minn):
                minn=dis[i]
                minnVer=i
        return minnVer
        
    count=len(arr)
    vis=[]
    dis=[]
    for i in range(count):
        vis.append(False)
        dis.append(sys.maxsize)
    
    dis[s]=0
    for i in range(count):
        u=finder(dis,vis)
        vis[u]=True
        
        for v in range(count):
            if(not vis[v] and arr[u][v]!=0 and (dis[u]+arr[u][v]<dis[v])):
                dis[v]=dis[u]+arr[u][v]
    
    print(dis[int(sys.argv[2])])
    # li.append(dis[i])
    

arr=[[0,5,7,0,0,0],
     [5,0,0,15,20,0],
     [7,0,0,5,35,0],
     [0,15,5,0,0,20],
     [0,20,35,0,0,10],
     [0,0,0,20,10,0]]

ans=[]
Dis(arr,int(sys.argv[1]))
