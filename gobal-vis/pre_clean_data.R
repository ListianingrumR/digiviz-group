View(each_country_gdp_1)
each_country_gdp <- each_country_gdp_1[,-c(5:45)]
View(each_country_gdp)

library(readxl)
library(tidyverse)
library(dplyr)
library(sf)
library(skimr)

word_sh <- st_read("D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world-administrative-boundaries.geojson")

world-gdp <- left_join(word_sh, each_country_gdp,by = "name")

write.csv(each_country_gdp,file='D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world_gdp_2000.csv',fileEncoding = "UTF-8")
