View(each_country_gdp_1)
each_country_gdp <- each_country_gdp_1[,-c(5:45)]
View(each_country_gdp)

library(readxl)
library(tidyverse)
library(dplyr)
library(sf)
library(skimr)