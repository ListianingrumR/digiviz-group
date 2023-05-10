View(each_country_gdp_1)
each_country_gdp <- each_country_gdp_1[,-c(5:45)]
View(each_country_gdp)

library(readxl)
library(tidyverse)
library(dplyr)
library(sf)
library(skimr)

word_sh <- st_read("D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world-administrative-boundaries.geojson")

colnames(each_country_gdp)[1] ="name"
View(each_country_gdp)

library(dplyr)
world-gdp <- left_join(word_sh, each_country_gdp,by = "name")

write.csv(each_country_gdp,file='D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world_gdp_2000.csv',fileEncoding = "UTF-8")


world <- st_read("D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world-administrative-boundaries-1/world-administrative-boundaries.shp")
library(dplyr)
world_gdp <- left_join(world, each_country_gdp,by = "name")

save(world_gdp)
