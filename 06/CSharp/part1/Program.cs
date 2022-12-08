using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using static System.Console;

namespace CSharp
{
    class Program
    {
        static bool FindMarker(string sequence, List<string> processedCharList)
        {
            processedCharList.Add(sequence);

            for (int i = 0; i < sequence.Length; i++)
            {
                if (i == sequence.Length - 3) break;

                if (i >= 4)
                {
                    string previousFour = sequence.Substring(i - 4, 4);
                    char character;
                    int occurrences = 0;

                    for (int j = 0; j < 4; j++)
                    {
                        character = previousFour[j];

                        if (occurrences == 0)
                        {
                            occurrences = previousFour.Count(item => item == character);
                        }
                        else
                        {
                            occurrences += previousFour.Count(item => item == character);
                        }
                    }

                    if (occurrences == 4)
                    {
                        FindNumberOfProcessedChars(processedCharList, previousFour);
                        return true;
                    }
                }
            }

            return false;
        }

        static void FindNumberOfProcessedChars(List<string> processedCharList, string previousFour)
        {
            int count = 0;

            foreach (string item in processedCharList)
            {
                int index = item.IndexOf(previousFour);

                if (index == -1)
                {
                    count += item.Length;
                }
                else
                {
                    count += index + 4;
                    WriteLine($"{count} characters need to be processed");
                }
            }
        }

        static void Main(string[] args)
        {
            string[] inputArr = File.ReadAllLines("input.txt");
            List<string> processedCharList = new List<string>();
            bool firstMarkerFound = false;

            foreach(string sequence in inputArr)
            {
                firstMarkerFound = FindMarker(sequence, processedCharList);

                if (firstMarkerFound) break;
            }
        }
    }
}
