# -*- coding: UTF-8 -*-
from budget_app.models import *
from budget_app.loaders import SimpleBudgetLoader
from decimal import *
import csv
import os
import re

class CanariasBudgetLoader(SimpleBudgetLoader):

    def parse_item(self, filename, line):
        # Some dirty lines in input data
        if line[0]=='':
            return None

        is_expense = (filename.find('gastos.csv')!=-1)
        is_actual = (filename.find('/ejecucion_')!=-1)
        if is_expense:
            # We got 3- or 4- digit functional codes as input, so add a trailing zero
            fc_code = line[2].ljust(4, '0')
            ec_code = line[3]

            return {
                'is_expense': True,
                'is_actual': is_actual,
                'fc_code': fc_code,
                'ec_code': ec_code[:-2],           # First three digits (everything but last two)
                'ic_code': line[1].rjust(4, '0'),  # We got 2- digit institutional codes as input, so we add prefixing zeroes
                'item_number': ec_code[-2:],       # Last two digits
                'description': line[4],
                'amount': self._parse_amount(line[5 if is_actual else 5])
            }

        else:
            return {
                'is_expense': False,
                'is_actual': is_actual,
                'ec_code': line[1][:-2],        # First three digits
                'ic_code': '0000',              # All income goes to the root node
                'item_number': line[1][-2:],    # Fourth and fifth digit; careful, there's trailing dirt
                'description': line[2],
                'amount': self._parse_amount(line[3 if is_actual else 3])
            }
