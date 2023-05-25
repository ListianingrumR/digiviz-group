# loading
library(readxl)
library(tidyverse)
library(dplyr)
library(sf)
library(skimr)
world_sh <- st_read("D:/003_digital_visualisation/group_cw2/digiviz-group/archive/global-data/world_shapfile/world-administrative-boundaries.geojson")

library(readr)
world_gdp_2 <- read_csv("archive/global-data/world_gdp_2/world_gdp_2.csv", 
                          +     col_types = cols(GDP_growth_annual = col_number()))
View(world_gdp_2)

colnames(world_gdp_2)[1] ="name"

library(dplyr)
world_gdp <- left_join(world_sh, world_gdp_2,by = "name")

#world-gdp
library(dplyr)
library(plotly)
library(htmlwidgets)
custom_colors <- c("#b2182b", "#f7f7f7","#2166ac" )
#create map
p <- plot_geo(world_gdp_2, locationmode = 'world') %>%
  add_trace( z = ~GDP_growth_annual, locations = ~Country_Code, text = ~name,  # Specify the country labels
             frame=~Year,
             color = ~GDP_growth_annual, colors = custom_colors)

htmlwidgets::saveWidget(p, file = "world_gdp_final.html")

#world-unemployment
library(readr)
X15_24_unemployment_ <- read_csv("archive/global-data/world_unemployment_rate/15_24_unemployment_.csv", 
                                   +     col_types = cols(Unemployment_rate = col_number()))
View(X15_24_unemployment_)

library(dplyr)
library(plotly)
library(htmlwidgets)
custom_colors <- c("#b2182b", "#f7f7f7","#2166ac" )
#create map
p <- plot_geo(X15_24_unemployment_, locationmode = 'world') %>%
  add_trace( z = ~Unemployment_rate, locations = ~code, text = ~coutry_name,  # Specify the country labels
             frame=~Year,
             color = ~Unemployment_rate, colors = custom_colors)

htmlwidgets::saveWidget(p, file = "world_unemployment_final.html")