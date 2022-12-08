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
                if (i >= 14)
                {
                    string previousFourteen = sequence.Substring(i - 14, 14);
                    char character;
                    int occurrences = 0;

                    for (int j = 0; j < 14; j++)
                    {
                        character = previousFourteen[j];

                        if (occurrences == 0)
                        {
                            occurrences = previousFourteen.Count(item => item == character);
                        }
                        else
                        {
                            occurrences += previousFourteen.Count(item => item == character);
                        }
                    }

                    if (occurrences == 14)
                    {
                        FindNumberOfProcessedChars(processedCharList, previousFourteen);
                        return true;
                    }
                }
            }

            return false;
        }

        static void FindNumberOfProcessedChars(List<string> processedCharList, string previousFourteen)
        {
            int count = 0;

            foreach (string item in processedCharList)
            {
                int index = item.IndexOf(previousFourteen);

                if (index == -1)
                {
                    count += item.Length;
                }
                else
                {
                    count += index + 14;
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

