using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using static System.Console;

namespace CSharp
{
    class Program {
        static void CountCalories(string[] itemArr, List<int> calorieList)
        {
            int totalCalories = 0;

            for (int i = 0; i < itemArr.Length; i++)
            {
                if (totalCalories == 0)
                {
                    totalCalories = Convert.ToInt32(itemArr[i]);
                }
                else
                {
                    totalCalories += Convert.ToInt32(itemArr[i]);
                }
            }
            
            calorieList.Add(totalCalories);
        }

        static void Main(string[] args) {
            List<int> calorieList = new List<int>();
            string[] inputArr = System.IO.File.ReadAllLines("input.txt");

            for (int i = 0; i < inputArr.Length; i++)
            {
                if (i == 0)
                {
                    int emptyStringIndex = Array.IndexOf(inputArr, "", i);
                    string[] itemArr = inputArr[0..emptyStringIndex];
                    CountCalories(itemArr, calorieList);
                }   
                else if (inputArr[i] == "")
                {
                    int startPosition = i + 1;
                    int emptyStringIndex = Array.IndexOf(inputArr, "", startPosition);

                    if (emptyStringIndex != -1)
                    {
                        string[] itemArr = inputArr[startPosition..emptyStringIndex];
                        CountCalories(itemArr, calorieList);
                    }
                    else
                    {
                        string[] itemArr = inputArr[startPosition..];
                        CountCalories(itemArr, calorieList);
                    }
                }
            }

            int calories = calorieList.Max();
            int elf = calorieList.IndexOf(calories);
            WriteLine($"Elf {elf + 1} is carrying {calories} calories");
        }
    }
}
