"use client"

import { useState, useCallback } from "react"
import { addMonths, format, differenceInMonths } from "date-fns"
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Pencil, X, Check } from "lucide-react"
import {CategoricalChartState} from "recharts/types/chart/types";

interface Grant {
  id: number
  hasCliff: boolean
  exercisePrice: number
  vestingStartDate: string
  term: number
  numberOfOptions: number
  vestingInterval: number
}

interface ChartDataPoint {
  month: string
  date: Date
  exercisePrice: number
  taxes: number
  profit: number
  vestedPercentage: number
}

export function VestingCalculatorComponent() {
  const [grants, setGrants] = useState<Grant[]>([])
  const [newGrant, setNewGrant] = useState<Omit<Grant, "id">>({
    hasCliff: true,
    exercisePrice: 0,
    vestingStartDate: format(new Date(), "yyyy-MM-dd"),
    term: 4,
    numberOfOptions: 1000,
    vestingInterval: 3,
  })
  const [editingGrantId, setEditingGrantId] = useState<number | null>(null)
  const [taxPercentage, setTaxPercentage] = useState(25)
  const [estimatedPricePerShare, setEstimatedPricePerShare] = useState(0)
  const [chartData, setChartData] = useState<ChartDataPoint[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const addGrant = () => {
    setGrants([...grants, { ...newGrant, id: Date.now() }])
    setNewGrant({
      hasCliff: true,
      exercisePrice: 0,
      vestingStartDate: format(new Date(), "yyyy-MM-dd"),
      term: 4,
      numberOfOptions: 1000,
      vestingInterval: 3,
    })
  }

  const removeGrant = (id: number) => {
    setGrants(grants.filter((grant) => grant.id !== id))
  }

  const startEditingGrant = (id: number) => {
    setEditingGrantId(id)
  }

  const cancelEditingGrant = () => {
    setEditingGrantId(null)
  }

  const saveEditingGrant = (editedGrant: Grant) => {
    setGrants(grants.map(grant => grant.id === editedGrant.id ? editedGrant : grant))
    setEditingGrantId(null)
  }

  const calculateVesting = useCallback(() => {
    if (grants.length === 0) return

    const now = new Date()
    const maxTerm = Math.max(...grants.map((grant) => grant.term))
    const months = Array.from({ length: maxTerm * 12 }, (_, i) => addMonths(now, i))

    const data = months.map((month) => {
      let totalExercisePrice = 0
      let totalTaxes = 0
      let totalProfit = 0
      let totalVestedOptions = 0
      let totalOptions = 0

      grants.forEach((grant) => {
        const startDate = new Date(grant.vestingStartDate)
        const monthsSinceStart = differenceInMonths(month, startDate)
        const cliffPeriod = grant.hasCliff ? 12 : 0

        totalOptions += grant.numberOfOptions

        if (monthsSinceStart >= cliffPeriod) {
          let vestedPercentage
          if (grant.hasCliff && monthsSinceStart === cliffPeriod) {
            vestedPercentage = 0.25
          } else {
            const vestingPeriods = Math.floor((monthsSinceStart - cliffPeriod) / grant.vestingInterval)
            vestedPercentage = Math.min((vestingPeriods * grant.vestingInterval + cliffPeriod) / (grant.term * 12), 1)
          }
          const vestedShares = grant.numberOfOptions * vestedPercentage
          const exerciseCost = vestedShares * grant.exercisePrice
          const marketValue = vestedShares * estimatedPricePerShare
          const profit = marketValue - exerciseCost
          const taxes = profit * (taxPercentage / 100)

          totalExercisePrice += exerciseCost
          totalTaxes += taxes
          totalProfit += profit - taxes
          totalVestedOptions += vestedShares
        }
      })

      return {
        month: format(month, "MMM yyyy"),
        date: month,
        exercisePrice: totalExercisePrice,
        taxes: totalTaxes,
        profit: totalProfit,
        vestedPercentage: (totalVestedOptions / totalOptions) * 100
      }
    })

    setChartData(data)
    setSelectedDate(now)
  }, [grants, taxPercentage, estimatedPricePerShare])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded shadow-lg text-sm">
          <p className="font-bold text-gray-800">{label}</p>
          {payload.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: ${entry.value.toFixed(2)}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const handleBarClick = (data: CategoricalChartState) => {
    if (data && data && data.activePayload!.length > 0) {
      setSelectedDate(data.activePayload![0].payload.date)
    }
  }

  const getVestedPercentage = () => {
    const dataPoint = chartData.find(point => 
      point.date.getFullYear() === selectedDate.getFullYear() && 
      point.date.getMonth() === selectedDate.getMonth()
    )
    return dataPoint ? dataPoint.vestedPercentage : 0
  }

  const vestedPercentage = getVestedPercentage()
  const donutData = [
    { name: "Vested", value: vestedPercentage },
    { name: "Unvested", value: 100 - vestedPercentage }
  ]
  const COLORS = ["#8884d8", "#82ca9d"]

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardTitle className="text-2xl font-bold">Startup Options Grant Vesting Calculator</CardTitle>
        <CardDescription className="text-purple-100">Add your grants and calculate your vesting schedule</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="taxPercentage" className="text-sm font-medium text-gray-700 dark:text-gray-300">Tax Percentage</Label>
              <Input
                id="taxPercentage"
                type="number"
                value={taxPercentage}
                onChange={(e) => setTaxPercentage(Number(e.target.value))}
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimatedPricePerShare" className="text-sm font-medium text-gray-700 dark:text-gray-300">Estimated Price per Share (USD)</Label>
              <Input
                id="estimatedPricePerShare"
                type="number"
                value={estimatedPricePerShare}
                onChange={(e) => setEstimatedPricePerShare(Number(e.target.value))}
                className="h-8 text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Add New Grant</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="hasCliff"
                  checked={newGrant.hasCliff}
                  onCheckedChange={(checked) => setNewGrant({ ...newGrant, hasCliff: checked })}
                />
                <Label htmlFor="hasCliff" className="text-sm">Has Cliff</Label>
              </div>
              <div className="space-y-1">
                <Label htmlFor="exercisePrice" className="text-xs">Exercise Price (USD)</Label>
                <Input
                  id="exercisePrice"
                  type="number"
                  value={newGrant.exercisePrice}
                  onChange={(e) => setNewGrant({ ...newGrant, exercisePrice: Number(e.target.value) })}
                  className="h-7 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="vestingStartDate" className="text-xs">Vesting Start Date</Label>
                <Input
                  id="vestingStartDate"
                  type="date"
                  value={newGrant.vestingStartDate}
                  onChange={(e) => setNewGrant({ ...newGrant, vestingStartDate: e.target.value })}
                  className="h-7 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="term" className="text-xs">Term (Years)</Label>
                <Input
                  id="term"
                  type="number"
                  value={newGrant.term}
                  onChange={(e) => setNewGrant({ ...newGrant, term: Number(e.target.value) })}
                  className="h-7 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="numberOfOptions" className="text-xs">Number of Options</Label>
                <Input
                  id="numberOfOptions"
                  type="number"
                  value={newGrant.numberOfOptions}
                  onChange={(e) => setNewGrant({ ...newGrant, numberOfOptions: Number(e.target.value) })}
                  className="h-7 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="vestingInterval" className="text-xs">Vesting Interval (Months)</Label>
                <Input
                  id="vestingInterval"
                  type="number"
                  value={newGrant.vestingInterval}
                  onChange={(e) => setNewGrant({ ...newGrant, vestingInterval: Number(e.target.value) })}
                  className="h-7 text-sm"
                />
              </div>
            </div>
            <Button onClick={addGrant} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">Add Grant</Button>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Added Grants</h3>
            {grants.map((grant) => (
              <div key={grant.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm">
                {editingGrantId === grant.id ? (
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`edit-hasCliff-${grant.id}`}
                        checked={grant.hasCliff}
                        onCheckedChange={(checked) => saveEditingGrant({ ...grant, hasCliff: checked })}
                      />
                      <Label htmlFor={`edit-hasCliff-${grant.id}`} className="text-xs">Has Cliff</Label>
                    </div>
                    <Input
                      type="number"
                      value={grant.exercisePrice}
                      onChange={(e) => saveEditingGrant({ ...grant, exercisePrice: Number(e.target.value) })}
                      className="h-7 text-xs"
                      placeholder="Exercise Price"
                    />
                    <Input
                      type="date"
                      value={grant.vestingStartDate}
                      onChange={(e) => saveEditingGrant({ ...grant, vestingStartDate: e.target.value })}
                      className="h-7 text-xs"
                    />
                    <Input
                      type="number"
                      value={grant.term}
                      onChange={(e) => saveEditingGrant({ ...grant, term: Number(e.target.value) })}
                      className="h-7 text-xs"
                      placeholder="Term (Years)"
                    />
                    <Input
                      type="number"
                      value={grant.numberOfOptions}
                      onChange={(e) => saveEditingGrant({ ...grant, numberOfOptions: Number(e.target.value) })}
                      className="h-7 text-xs"
                      placeholder="Number of Options"
                    />
                    <Input
                      type="number"
                      value={grant.vestingInterval}
                      onChange={(e) => saveEditingGrant({ ...grant, vestingInterval: Number(e.target.value) })}
                      className="h-7 text-xs"
                      placeholder="Vesting Interval"
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => saveEditingGrant(grant)} className="bg-green-500 hover:bg-green-600 text-white">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" onClick={cancelEditingGrant} className="bg-gray-500 hover:bg-gray-600 text-white">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-gray-700 dark:text-gray-200">
                      {grant.hasCliff ? "With Cliff" : "No Cliff"} - ${grant.exercisePrice} - {grant.vestingStartDate} - {grant.term} years - {grant.numberOfOptions} options - {grant.vestingInterval} mo interval
                    </span>
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={() => startEditingGrant(grant.id)} className="bg-blue-500 hover:bg-blue-600 text-white">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="sm" onClick={() => removeGrant(grant.id)} className="bg-red-500 hover:bg-red-600 text-white">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <Button onClick={calculateVesting} className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white">
            Calculate Vesting
          </Button>

          {chartData.length > 0 && (
            <>
              <div className="h-[400px] mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} onClick={handleBarClick}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="exercisePrice" stackId="a" fill="#8884d8" name="Exercise Price" />
                    <Bar dataKey="taxes" stackId="a" fill="#82ca9d" name="Taxes" />
                    <Bar dataKey="profit" stackId="a" fill="#ffc658" name="Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-center mb-4">
                  Vesting Status as of {format(selectedDate, "MMMM yyyy")}
                </h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={donutData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {donutData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center mt-4">
                  {vestedPercentage.toFixed(2)}% Vested, {(100 - vestedPercentage).toFixed(2)}% Unvested
                </p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}