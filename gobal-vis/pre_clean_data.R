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


world <- st_read("D/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/clean/world-administrative-boundaries-1/world-administrative-boundaries.shp")
library(dplyr)
world_gdp <- left_join(world, each_country_gdp,by = "name")


class(world_gdp)
str(world_gdp)






world_gdp_2000 <- read_csv("gobal-data/world_gdp_2000.csv", 
col_types = cols(`2001.00` = col_number(), 
                 `2002.00` = col_number(), `2003.00` = col_number(), 
                 `2004.00` = col_number(), `2005.00` = col_number(), 
                `2006.00` = col_number(), `2007.00` = col_number(), 
                 `2008.00` = col_number(), `2009.00` = col_number(), 
                 `2010.00` = col_number(), `2011.00` = col_number(), 
                `2012.00` = col_number(), `2013.00` = col_number(), 
                  `2014.00` = col_number(), `2015.00` = col_number(), 
                  `2016.00` = col_number(), `2017.00` = col_number(), 
                  `2018.00` = col_number(), `2019.00` = col_number(), 
                    `2020.00` = col_number(), `2021.00` = col_number()))
write.csv(world_gdp_2000 , file = "world_gdp_2000-2021.csv")
colnames(world_gdp_2000)[2] ="name"

install.packages("rgdal")
library(rgdal)
my_shapefile <- readOGR(dsn = "/path/to/shapefile/", layer = "my_shapefile")



str(world_gdp)



library(sf)
# replace "your_sf_object" with the name of your sf object
st_write(world_gdp, "D:/003_digital_visualisation/group_cw2/A_group-work/digiviz-group/gobal-data/world_gdp.shp")
