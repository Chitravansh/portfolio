[1mdiff --git a/components/Home/Home.tsx b/components/Home/Home.tsx[m
[1mindex 0f0375b..73143f2 100644[m
[1m--- a/components/Home/Home.tsx[m
[1m+++ b/components/Home/Home.tsx[m
[36m@@ -1,9 +1,10 @@[m
 import React from 'react'[m
[32m+[m[32mimport Hero from './Hero/Hero'[m
 [m
 const Home = () => {[m
   return ([m
[31m-    <div className="overflow-hidden">[m
[31m-      Home[m
[32m+[m[32m    <div className="overflow-hidden h-[2000px]">[m
[32m+[m[32m     <Hero />[m
     </div>[m
   )[m
 }[m
