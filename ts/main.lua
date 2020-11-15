
local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file)
    if ____moduleCache[file] then
        return ____moduleCache[file]
    end
    if ____modules[file] then
        ____moduleCache[file] = ____modules[file]()
        return ____moduleCache[file]
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["lualib_bundle"] = function() function __TS__ArrayConcat(arr1, ...)
    local args = {...}
    local out = {}
    for ____, val in ipairs(arr1) do
        out[#out + 1] = val
    end
    for ____, arg in ipairs(args) do
        if pcall(
            function() return #arg end
        ) and (type(arg) ~= "string") then
            local argAsArray = arg
            for ____, val in ipairs(argAsArray) do
                out[#out + 1] = val
            end
        else
            out[#out + 1] = arg
        end
    end
    return out
end

function __TS__ArrayEvery(arr, callbackfn)
    do
        local i = 0
        while i < #arr do
            if not callbackfn(_G, arr[i + 1], i, arr) then
                return false
            end
            i = i + 1
        end
    end
    return true
end

function __TS__ArrayFilter(arr, callbackfn)
    local result = {}
    do
        local i = 0
        while i < #arr do
            if callbackfn(_G, arr[i + 1], i, arr) then
                result[#result + 1] = arr[i + 1]
            end
            i = i + 1
        end
    end
    return result
end

function __TS__ArrayForEach(arr, callbackFn)
    do
        local i = 0
        while i < #arr do
            callbackFn(_G, arr[i + 1], i, arr)
            i = i + 1
        end
    end
end

function __TS__ArrayFind(arr, predicate)
    local len = #arr
    local k = 0
    while k < len do
        local elem = arr[k + 1]
        if predicate(_G, elem, k, arr) then
            return elem
        end
        k = k + 1
    end
    return nil
end

function __TS__ArrayFindIndex(arr, callbackFn)
    do
        local i = 0
        local len = #arr
        while i < len do
            if callbackFn(_G, arr[i + 1], i, arr) then
                return i
            end
            i = i + 1
        end
    end
    return -1
end

function __TS__ArrayIncludes(self, searchElement, fromIndex)
    if fromIndex == nil then
        fromIndex = 0
    end
    local len = #self
    local k = fromIndex
    if fromIndex < 0 then
        k = len + fromIndex
    end
    if k < 0 then
        k = 0
    end
    for i = k, len do
        if self[i + 1] == searchElement then
            return true
        end
    end
    return false
end

function __TS__ArrayIndexOf(arr, searchElement, fromIndex)
    local len = #arr
    if len == 0 then
        return -1
    end
    local n = 0
    if fromIndex then
        n = fromIndex
    end
    if n >= len then
        return -1
    end
    local k
    if n >= 0 then
        k = n
    else
        k = len + n
        if k < 0 then
            k = 0
        end
    end
    do
        local i = k
        while i < len do
            if arr[i + 1] == searchElement then
                return i
            end
            i = i + 1
        end
    end
    return -1
end

function __TS__ArrayJoin(self, separator)
    if separator == nil then
        separator = ","
    end
    local result = ""
    for index, value in ipairs(self) do
        if index > 1 then
            result = tostring(result) .. tostring(separator)
        end
        result = tostring(result) .. tostring(
            tostring(value)
        )
    end
    return result
end

function __TS__ArrayMap(arr, callbackfn)
    local newArray = {}
    do
        local i = 0
        while i < #arr do
            newArray[i + 1] = callbackfn(_G, arr[i + 1], i, arr)
            i = i + 1
        end
    end
    return newArray
end

function __TS__ArrayPush(arr, ...)
    local items = {...}
    for ____, item in ipairs(items) do
        arr[#arr + 1] = item
    end
    return #arr
end

function __TS__ArrayReduce(arr, callbackFn, ...)
    local len = #arr
    local k = 0
    local accumulator = nil
    if select("#", ...) ~= 0 then
        accumulator = select(1, ...)
    elseif len > 0 then
        accumulator = arr[1]
        k = 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k, len - 1 do
        accumulator = callbackFn(_G, accumulator, arr[i + 1], i, arr)
    end
    return accumulator
end

function __TS__ArrayReduceRight(arr, callbackFn, ...)
    local len = #arr
    local k = len - 1
    local accumulator = nil
    if select("#", ...) ~= 0 then
        accumulator = select(1, ...)
    elseif len > 0 then
        accumulator = arr[k + 1]
        k = k - 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k, 0, -1 do
        accumulator = callbackFn(_G, accumulator, arr[i + 1], i, arr)
    end
    return accumulator
end

function __TS__ArrayReverse(arr)
    local i = 0
    local j = #arr - 1
    while i < j do
        local temp = arr[j + 1]
        arr[j + 1] = arr[i + 1]
        arr[i + 1] = temp
        i = i + 1
        j = j - 1
    end
    return arr
end

function __TS__ArrayShift(arr)
    return table.remove(arr, 1)
end

function __TS__ArrayUnshift(arr, ...)
    local items = {...}
    do
        local i = #items - 1
        while i >= 0 do
            table.insert(arr, 1, items[i + 1])
            i = i - 1
        end
    end
    return #arr
end

function __TS__ArraySort(arr, compareFn)
    if compareFn ~= nil then
        table.sort(
            arr,
            function(a, b) return compareFn(_G, a, b) < 0 end
        )
    else
        table.sort(arr)
    end
    return arr
end

function __TS__ArraySlice(list, first, last)
    local len = #list
    local relativeStart = first or 0
    local k
    if relativeStart < 0 then
        k = math.max(len + relativeStart, 0)
    else
        k = math.min(relativeStart, len)
    end
    local relativeEnd = last
    if last == nil then
        relativeEnd = len
    end
    local final
    if relativeEnd < 0 then
        final = math.max(len + relativeEnd, 0)
    else
        final = math.min(relativeEnd, len)
    end
    local out = {}
    local n = 0
    while k < final do
        out[n + 1] = list[k + 1]
        k = k + 1
        n = n + 1
    end
    return out
end

function __TS__ArraySome(arr, callbackfn)
    do
        local i = 0
        while i < #arr do
            if callbackfn(_G, arr[i + 1], i, arr) then
                return true
            end
            i = i + 1
        end
    end
    return false
end

function __TS__ArraySplice(list, ...)
    local len = #list
    local actualArgumentCount = select("#", ...)
    local start = select(1, ...)
    local deleteCount = select(2, ...)
    local actualStart
    if start < 0 then
        actualStart = math.max(len + start, 0)
    else
        actualStart = math.min(start, len)
    end
    local itemCount = math.max(actualArgumentCount - 2, 0)
    local actualDeleteCount
    if actualArgumentCount == 0 then
        actualDeleteCount = 0
    elseif actualArgumentCount == 1 then
        actualDeleteCount = len - actualStart
    else
        actualDeleteCount = math.min(
            math.max(deleteCount or 0, 0),
            len - actualStart
        )
    end
    local out = {}
    do
        local k = 0
        while k < actualDeleteCount do
            local from = actualStart + k
            if list[from + 1] then
                out[k + 1] = list[from + 1]
            end
            k = k + 1
        end
    end
    if itemCount < actualDeleteCount then
        do
            local k = actualStart
            while k < (len - actualDeleteCount) do
                local from = k + actualDeleteCount
                local to = k + itemCount
                if list[from + 1] then
                    list[to + 1] = list[from + 1]
                else
                    list[to + 1] = nil
                end
                k = k + 1
            end
        end
        do
            local k = len
            while k > ((len - actualDeleteCount) + itemCount) do
                list[k] = nil
                k = k - 1
            end
        end
    elseif itemCount > actualDeleteCount then
        do
            local k = len - actualDeleteCount
            while k > actualStart do
                local from = (k + actualDeleteCount) - 1
                local to = (k + itemCount) - 1
                if list[from + 1] then
                    list[to + 1] = list[from + 1]
                else
                    list[to + 1] = nil
                end
                k = k - 1
            end
        end
    end
    local j = actualStart
    for i = 3, actualArgumentCount do
        list[j + 1] = select(i, ...)
        j = j + 1
    end
    do
        local k = #list - 1
        while k >= ((len - actualDeleteCount) + itemCount) do
            list[k + 1] = nil
            k = k - 1
        end
    end
    return out
end

function __TS__ArrayToObject(array)
    local object = {}
    do
        local i = 0
        while i < #array do
            object[i] = array[i + 1]
            i = i + 1
        end
    end
    return object
end

function __TS__ArrayFlat(array, depth)
    if depth == nil then
        depth = 1
    end
    local result = {}
    for ____, value in ipairs(array) do
        if ((depth > 0) and (type(value) == "table")) and ((value[1] ~= nil) or (next(value, nil) == nil)) then
            result = __TS__ArrayConcat(
                result,
                __TS__ArrayFlat(value, depth - 1)
            )
        else
            result[#result + 1] = value
        end
    end
    return result
end

function __TS__ArrayFlatMap(array, callback)
    local result = {}
    do
        local i = 0
        while i < #array do
            local value = callback(_G, array[i + 1], i, array)
            if (type(value) == "table") and ((value[1] ~= nil) or (next(value, nil) == nil)) then
                result = __TS__ArrayConcat(result, value)
            else
                result[#result + 1] = value
            end
            i = i + 1
        end
    end
    return result
end

function __TS__ArraySetLength(arr, length)
    if (((length < 0) or (length ~= length)) or (length == math.huge)) or (math.floor(length) ~= length) then
        error(
            "invalid array length: " .. tostring(length),
            0
        )
    end
    do
        local i = #arr - 1
        while i >= length do
            arr[i + 1] = nil
            i = i - 1
        end
    end
    return length
end

function __TS__Class(self)
    local c = {prototype = {}}
    c.prototype.__index = c.prototype
    c.prototype.constructor = c
    return c
end

function __TS__ClassExtends(target, base)
    target.____super = base
    local staticMetatable = setmetatable({__index = base}, base)
    setmetatable(target, staticMetatable)
    local baseMetatable = getmetatable(base)
    if baseMetatable then
        if type(baseMetatable.__index) == "function" then
            staticMetatable.__index = baseMetatable.__index
        end
        if type(baseMetatable.__newindex) == "function" then
            staticMetatable.__newindex = baseMetatable.__newindex
        end
    end
    setmetatable(target.prototype, base.prototype)
    if type(base.prototype.__index) == "function" then
        target.prototype.__index = base.prototype.__index
    end
    if type(base.prototype.__newindex) == "function" then
        target.prototype.__newindex = base.prototype.__newindex
    end
    if type(base.prototype.__tostring) == "function" then
        target.prototype.__tostring = base.prototype.__tostring
    end
end

function __TS__CloneDescriptor(____bindingPattern0)
    local enumerable
    enumerable = ____bindingPattern0.enumerable
    local configurable
    configurable = ____bindingPattern0.configurable
    local get
    get = ____bindingPattern0.get
    local set
    set = ____bindingPattern0.set
    local writable
    writable = ____bindingPattern0.writable
    local value
    value = ____bindingPattern0.value
    local descriptor = {enumerable = enumerable == true, configurable = configurable == true}
    local hasGetterOrSetter = (get ~= nil) or (set ~= nil)
    local hasValueOrWritableAttribute = (writable ~= nil) or (value ~= nil)
    if hasGetterOrSetter and hasValueOrWritableAttribute then
        error("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute.", 0)
    end
    if get or set then
        descriptor.get = get
        descriptor.set = set
    else
        descriptor.value = value
        descriptor.writable = writable == true
    end
    return descriptor
end

function __TS__Decorate(decorators, target, key, desc)
    local result = target
    do
        local i = #decorators
        while i >= 0 do
            local decorator = decorators[i + 1]
            if decorator then
                local oldResult = result
                if key == nil then
                    result = decorator(_G, result)
                elseif desc == true then
                    local value = rawget(target, key)
                    local descriptor = __TS__ObjectGetOwnPropertyDescriptor(target, key) or ({configurable = true, writable = true, value = value})
                    local desc = decorator(_G, target, key, descriptor) or descriptor
                    local isSimpleValue = (((desc.configurable == true) and (desc.writable == true)) and (not desc.get)) and (not desc.set)
                    if isSimpleValue then
                        rawset(target, key, desc.value)
                    else
                        __TS__SetDescriptor(
                            target,
                            key,
                            __TS__ObjectAssign({}, descriptor, desc)
                        )
                    end
                elseif desc == false then
                    result = decorator(_G, target, key, desc)
                else
                    result = decorator(_G, target, key)
                end
                result = result or oldResult
            end
            i = i - 1
        end
    end
    return result
end

function __TS__DecorateParam(paramIndex, decorator)
    return function(____, target, key) return decorator(_G, target, key, paramIndex) end
end

function __TS__ObjectGetOwnPropertyDescriptors(object)
    local metatable = getmetatable(object)
    if not metatable then
        return {}
    end
    return rawget(metatable, "_descriptors")
end

function __TS__Delete(target, key)
    local descriptors = __TS__ObjectGetOwnPropertyDescriptors(target)
    local descriptor = descriptors[key]
    if descriptor then
        if not descriptor.configurable then
            error(
                ((("Cannot delete property " .. tostring(key)) .. " of ") .. tostring(target)) .. ".",
                0
            )
        end
        descriptors[key] = nil
        return true
    end
    if target[key] ~= nil then
        target[key] = nil
        return true
    end
    return false
end

function __TS__DelegatedYield(iterable)
    if type(iterable) == "string" then
        for index = 0, #iterable - 1 do
            coroutine.yield(
                __TS__StringAccess(iterable, index)
            )
        end
    elseif iterable.____coroutine ~= nil then
        local co = iterable.____coroutine
        while true do
            local status, value = coroutine.resume(co)
            if not status then
                error(value, 0)
            end
            if coroutine.status(co) == "dead" then
                return value
            else
                coroutine.yield(value)
            end
        end
    elseif iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        while true do
            local result = iterator:next()
            if result.done then
                return result.value
            else
                coroutine.yield(result.value)
            end
        end
    else
        for ____, value in ipairs(iterable) do
            coroutine.yield(value)
        end
    end
end

function __TS__New(target, ...)
    local instance = setmetatable({}, target.prototype)
    instance:____constructor(...)
    return instance
end

function __TS__GetErrorStack(self, constructor)
    local level = 1
    while true do
        local info = debug.getinfo(level, "f")
        level = level + 1
        if not info then
            level = 1
            break
        elseif info.func == constructor then
            break
        end
    end
    return debug.traceback(nil, level)
end
function __TS__WrapErrorToString(self, getDescription)
    return function(self)
        local description = getDescription(self)
        local caller = debug.getinfo(3, "f")
        if (_VERSION == "Lua 5.1") or (caller and (caller.func ~= error)) then
            return description
        else
            return (tostring(description) .. "\n") .. tostring(self.stack)
        end
    end
end
function __TS__InitErrorClass(self, Type, name)
    Type.name = name
    return setmetatable(
        Type,
        {
            __call = function(____, _self, message) return __TS__New(Type, message) end
        }
    )
end
Error = __TS__InitErrorClass(
    _G,
    (function()
        local ____ = __TS__Class()
        ____.name = ""
        function ____.prototype.____constructor(self, message)
            if message == nil then
                message = ""
            end
            self.message = message
            self.name = "Error"
            self.stack = __TS__GetErrorStack(_G, self.constructor.new)
            local metatable = getmetatable(self)
            if not metatable.__errorToStringPatched then
                metatable.__errorToStringPatched = true
                metatable.__tostring = __TS__WrapErrorToString(_G, metatable.__tostring)
            end
        end
        function ____.prototype.__tostring(self)
            return (((self.message ~= "") and (function() return (tostring(self.name) .. ": ") .. tostring(self.message) end)) or (function() return self.name end))()
        end
        return ____
    end)(),
    "Error"
)
for ____, errorName in ipairs({"RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"}) do
    _G[errorName] = __TS__InitErrorClass(
        _G,
        (function()
            local ____ = __TS__Class()
            ____.name = ____.name
            __TS__ClassExtends(____, Error)
            function ____.prototype.____constructor(self, ...)
                Error.prototype.____constructor(self, ...)
                self.name = errorName
            end
            return ____
        end)(),
        errorName
    )
end

__TS__Unpack = table.unpack or unpack

function __TS__FunctionBind(fn, thisArg, ...)
    local boundArgs = {...}
    return function(____, ...)
        local args = {...}
        do
            local i = 0
            while i < #boundArgs do
                table.insert(args, i + 1, boundArgs[i + 1])
                i = i + 1
            end
        end
        return fn(
            thisArg,
            __TS__Unpack(args)
        )
    end
end

____symbolMetatable = {
    __tostring = function(self)
        return ("Symbol(" .. tostring(self.description or "")) .. ")"
    end
}
function __TS__Symbol(description)
    return setmetatable({description = description}, ____symbolMetatable)
end
Symbol = {
    iterator = __TS__Symbol("Symbol.iterator"),
    hasInstance = __TS__Symbol("Symbol.hasInstance"),
    species = __TS__Symbol("Symbol.species"),
    toStringTag = __TS__Symbol("Symbol.toStringTag")
}

function __TS__GeneratorIterator(self)
    return self
end
function __TS__GeneratorNext(self, ...)
    local co = self.____coroutine
    if coroutine.status(co) == "dead" then
        return {done = true}
    end
    local status, value = coroutine.resume(co, ...)
    if not status then
        error(value, 0)
    end
    return {
        value = value,
        done = coroutine.status(co) == "dead"
    }
end
function __TS__Generator(fn)
    return function(...)
        local args = {...}
        local argsLength = select("#", ...)
        return {
            ____coroutine = coroutine.create(
                function() return fn(
                    (unpack or table.unpack)(args, 1, argsLength)
                ) end
            ),
            [Symbol.iterator] = __TS__GeneratorIterator,
            next = __TS__GeneratorNext
        }
    end
end

function __TS__InstanceOf(obj, classTbl)
    if type(classTbl) ~= "table" then
        error("Right-hand side of 'instanceof' is not an object", 0)
    end
    if classTbl[Symbol.hasInstance] ~= nil then
        return not (not classTbl[Symbol.hasInstance](classTbl, obj))
    end
    if type(obj) == "table" then
        local luaClass = obj.constructor
        while luaClass ~= nil do
            if luaClass == classTbl then
                return true
            end
            luaClass = luaClass.____super
        end
    end
    return false
end

function __TS__InstanceOfObject(value)
    local valueType = type(value)
    return (valueType == "table") or (valueType == "function")
end

function __TS__IteratorGeneratorStep(self)
    local co = self.____coroutine
    local status, value = coroutine.resume(co)
    if not status then
        error(value, 0)
    end
    if coroutine.status(co) == "dead" then
        return
    end
    return true, value
end
function __TS__IteratorIteratorStep(self)
    local result = self:next()
    if result.done then
        return
    end
    return true, result.value
end
function __TS__IteratorStringStep(self, index)
    index = index + 1
    if index > #self then
        return
    end
    return index, string.sub(self, index, index)
end
function __TS__Iterator(iterable)
    if type(iterable) == "string" then
        return __TS__IteratorStringStep, iterable, 0
    elseif iterable.____coroutine ~= nil then
        return __TS__IteratorGeneratorStep, iterable
    elseif iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        return __TS__IteratorIteratorStep, iterator
    else
        return ipairs(iterable)
    end
end

Map = (function()
    local Map = __TS__Class()
    Map.name = "Map"
    function Map.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "Map"
        self.items = {}
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self:set(value[1], value[2])
            end
        else
            local array = entries
            for ____, kvp in ipairs(array) do
                self:set(kvp[1], kvp[2])
            end
        end
    end
    function Map.prototype.clear(self)
        self.items = {}
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
    end
    function Map.prototype.delete(self, key)
        local contains = self:has(key)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[key]
            local previous = self.previousKey[key]
            if next and previous then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[key] = nil
            self.previousKey[key] = nil
        end
        self.items[key] = nil
        return contains
    end
    function Map.prototype.forEach(self, callback)
        for ____, key in __TS__Iterator(
            self:keys()
        ) do
            callback(_G, self.items[key], key, self)
        end
    end
    function Map.prototype.get(self, key)
        return self.items[key]
    end
    function Map.prototype.has(self, key)
        return (self.nextKey[key] ~= nil) or (self.lastKey == key)
    end
    function Map.prototype.set(self, key, value)
        local isNewValue = not self:has(key)
        if isNewValue then
            self.size = self.size + 1
        end
        self.items[key] = value
        if self.firstKey == nil then
            self.firstKey = key
            self.lastKey = key
        elseif isNewValue then
            self.nextKey[self.lastKey] = key
            self.previousKey[key] = self.lastKey
            self.lastKey = key
        end
        return self
    end
    Map.prototype[Symbol.iterator] = function(self)
        return self:entries()
    end
    function Map.prototype.entries(self)
        local ____ = self
        local items = ____.items
        local nextKey = ____.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, items[key]}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.values(self)
        local ____ = self
        local items = ____.items
        local nextKey = ____.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = items[key]}
                key = nextKey[key]
                return result
            end
        }
    end
    Map[Symbol.species] = Map
    return Map
end)()

__TS__MathAtan2 = math.atan2 or math.atan

function __TS__Number(value)
    local valueType = type(value)
    if valueType == "number" then
        return value
    elseif valueType == "string" then
        local numberValue = tonumber(value)
        if numberValue then
            return numberValue
        end
        if value == "Infinity" then
            return math.huge
        end
        if value == "-Infinity" then
            return -math.huge
        end
        local stringWithoutSpaces = string.gsub(value, "%s", "")
        if stringWithoutSpaces == "" then
            return 0
        end
        return 0 / 0
    elseif valueType == "boolean" then
        return (value and 1) or 0
    else
        return 0 / 0
    end
end

function __TS__NumberIsFinite(value)
    return (((type(value) == "number") and (value == value)) and (value ~= math.huge)) and (value ~= -math.huge)
end

function __TS__NumberIsNaN(value)
    return value ~= value
end

____radixChars = "0123456789abcdefghijklmnopqrstuvwxyz"
function __TS__NumberToString(self, radix)
    if ((((radix == nil) or (radix == 10)) or (self == math.huge)) or (self == -math.huge)) or (self ~= self) then
        return tostring(self)
    end
    radix = math.floor(radix)
    if (radix < 2) or (radix > 36) then
        error("toString() radix argument must be between 2 and 36", 0)
    end
    local integer, fraction = math.modf(
        math.abs(self)
    )
    local result = ""
    if radix == 8 then
        result = string.format("%o", integer)
    elseif radix == 16 then
        result = string.format("%x", integer)
    else
        repeat
            do
                result = tostring(
                    __TS__StringAccess(____radixChars, integer % radix)
                ) .. tostring(result)
                integer = math.floor(integer / radix)
            end
        until not (integer ~= 0)
    end
    if fraction ~= 0 then
        result = tostring(result) .. "."
        local delta = 1e-16
        repeat
            do
                fraction = fraction * radix
                delta = delta * radix
                local digit = math.floor(fraction)
                result = tostring(result) .. tostring(
                    __TS__StringAccess(____radixChars, digit)
                )
                fraction = fraction - digit
            end
        until not (fraction >= delta)
    end
    if self < 0 then
        result = "-" .. tostring(result)
    end
    return result
end

function __TS__ObjectAssign(to, ...)
    local sources = {...}
    if to == nil then
        return to
    end
    for ____, source in ipairs(sources) do
        for key in pairs(source) do
            to[key] = source[key]
        end
    end
    return to
end

function ____descriptorIndex(self, key)
    local value = rawget(self, key)
    if value ~= nil then
        return value
    end
    local metatable = getmetatable(self)
    while metatable do
        local rawResult = rawget(metatable, key)
        if rawResult ~= nil then
            return rawResult
        end
        local descriptors = rawget(metatable, "_descriptors")
        if descriptors then
            local descriptor = descriptors[key]
            if descriptor then
                if descriptor.get then
                    return descriptor.get(self)
                end
                return descriptor.value
            end
        end
        metatable = getmetatable(metatable)
    end
end
function ____descriptorNewindex(self, key, value)
    local metatable = getmetatable(self)
    while metatable do
        local descriptors = rawget(metatable, "_descriptors")
        if descriptors then
            local descriptor = descriptors[key]
            if descriptor then
                if descriptor.set then
                    descriptor.set(self, value)
                else
                    if descriptor.writable == false then
                        error(
                            ((("Cannot assign to read only property '" .. tostring(key)) .. "' of object '") .. tostring(self)) .. "'",
                            0
                        )
                    end
                    descriptor.value = value
                end
                return
            end
        end
        metatable = getmetatable(metatable)
    end
    rawset(self, key, value)
end
function __TS__SetDescriptor(target, key, desc, isPrototype)
    if isPrototype == nil then
        isPrototype = false
    end
    local metatable = ((isPrototype and (function() return target end)) or (function() return getmetatable(target) end))()
    if not metatable then
        metatable = {}
        setmetatable(target, metatable)
    end
    local value = rawget(target, key)
    if value ~= nil then
        rawset(target, key, nil)
    end
    if not rawget(metatable, "_descriptors") then
        metatable._descriptors = {}
    end
    local descriptor = __TS__CloneDescriptor(desc)
    metatable._descriptors[key] = descriptor
    metatable.__index = ____descriptorIndex
    metatable.__newindex = ____descriptorNewindex
end

function __TS__ObjectDefineProperty(target, key, desc)
    local luaKey = (((type(key) == "number") and (function() return key + 1 end)) or (function() return key end))()
    local value = rawget(target, luaKey)
    local hasGetterOrSetter = (desc.get ~= nil) or (desc.set ~= nil)
    local descriptor
    if hasGetterOrSetter then
        if value ~= nil then
            error(
                "Cannot redefine property: " .. tostring(key),
                0
            )
        end
        descriptor = desc
    else
        local valueExists = value ~= nil
        descriptor = {
            set = desc.set,
            get = desc.get,
            configurable = (((desc.configurable ~= nil) and (function() return desc.configurable end)) or (function() return valueExists end))(),
            enumerable = (((desc.enumerable ~= nil) and (function() return desc.enumerable end)) or (function() return valueExists end))(),
            writable = (((desc.writable ~= nil) and (function() return desc.writable end)) or (function() return valueExists end))(),
            value = (((desc.value ~= nil) and (function() return desc.value end)) or (function() return value end))()
        }
    end
    __TS__SetDescriptor(target, luaKey, descriptor)
    return target
end

function __TS__ObjectEntries(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = {key, obj[key]}
    end
    return result
end

function __TS__ObjectFromEntries(entries)
    local obj = {}
    local iterable = entries
    if iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        while true do
            local result = iterator:next()
            if result.done then
                break
            end
            local value = result.value
            obj[value[1]] = value[2]
        end
    else
        for ____, entry in ipairs(entries) do
            obj[entry[1]] = entry[2]
        end
    end
    return obj
end

function __TS__ObjectGetOwnPropertyDescriptor(object, key)
    local metatable = getmetatable(object)
    if not metatable then
        return
    end
    if not rawget(metatable, "_descriptors") then
        return
    end
    return rawget(metatable, "_descriptors")[key]
end

function __TS__ObjectKeys(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = key
    end
    return result
end

function __TS__ObjectRest(target, usedProperties)
    local result = {}
    for property in pairs(target) do
        if not usedProperties[property] then
            result[property] = target[property]
        end
    end
    return result
end

function __TS__ObjectValues(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = obj[key]
    end
    return result
end

function __TS__ParseFloat(numberString)
    local infinityMatch = string.match(numberString, "^%s*(-?Infinity)")
    if infinityMatch then
        return (((__TS__StringAccess(infinityMatch, 0) == "-") and (function() return -math.huge end)) or (function() return math.huge end))()
    end
    local number = tonumber(
        string.match(numberString, "^%s*(-?%d+%.?%d*)")
    )
    return number or (0 / 0)
end

__TS__parseInt_base_pattern = "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTvVwWxXyYzZ"
function __TS__ParseInt(numberString, base)
    if base == nil then
        base = 10
        local hexMatch = string.match(numberString, "^%s*-?0[xX]")
        if hexMatch then
            base = 16
            numberString = ((string.match(hexMatch, "-") and (function() return "-" .. tostring(
                __TS__StringSubstr(numberString, #hexMatch)
            ) end)) or (function() return __TS__StringSubstr(numberString, #hexMatch) end))()
        end
    end
    if (base < 2) or (base > 36) then
        return 0 / 0
    end
    local allowedDigits = (((base <= 10) and (function() return __TS__StringSubstring(__TS__parseInt_base_pattern, 0, base) end)) or (function() return __TS__StringSubstr(__TS__parseInt_base_pattern, 0, 10 + (2 * (base - 10))) end))()
    local pattern = ("^%s*(-?[" .. tostring(allowedDigits)) .. "]*)"
    local number = tonumber(
        string.match(numberString, pattern),
        base
    )
    if number == nil then
        return 0 / 0
    end
    if number >= 0 then
        return math.floor(number)
    else
        return math.ceil(number)
    end
end

Set = (function()
    local Set = __TS__Class()
    Set.name = "Set"
    function Set.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "Set"
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self:add(result.value)
            end
        else
            local array = values
            for ____, value in ipairs(array) do
                self:add(value)
            end
        end
    end
    function Set.prototype.add(self, value)
        local isNewValue = not self:has(value)
        if isNewValue then
            self.size = self.size + 1
        end
        if self.firstKey == nil then
            self.firstKey = value
            self.lastKey = value
        elseif isNewValue then
            self.nextKey[self.lastKey] = value
            self.previousKey[value] = self.lastKey
            self.lastKey = value
        end
        return self
    end
    function Set.prototype.clear(self)
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
    end
    function Set.prototype.delete(self, value)
        local contains = self:has(value)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[value]
            local previous = self.previousKey[value]
            if next and previous then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[value] = nil
            self.previousKey[value] = nil
        end
        return contains
    end
    function Set.prototype.forEach(self, callback)
        for ____, key in __TS__Iterator(
            self:keys()
        ) do
            callback(_G, key, key, self)
        end
    end
    function Set.prototype.has(self, value)
        return (self.nextKey[value] ~= nil) or (self.lastKey == value)
    end
    Set.prototype[Symbol.iterator] = function(self)
        return self:values()
    end
    function Set.prototype.entries(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, key}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.values(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    Set[Symbol.species] = Set
    return Set
end)()

WeakMap = (function()
    local WeakMap = __TS__Class()
    WeakMap.name = "WeakMap"
    function WeakMap.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "WeakMap"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self.items[value[1]] = value[2]
            end
        else
            for ____, kvp in ipairs(entries) do
                self.items[kvp[1]] = kvp[2]
            end
        end
    end
    function WeakMap.prototype.delete(self, key)
        local contains = self:has(key)
        self.items[key] = nil
        return contains
    end
    function WeakMap.prototype.get(self, key)
        return self.items[key]
    end
    function WeakMap.prototype.has(self, key)
        return self.items[key] ~= nil
    end
    function WeakMap.prototype.set(self, key, value)
        self.items[key] = value
        return self
    end
    WeakMap[Symbol.species] = WeakMap
    return WeakMap
end)()

WeakSet = (function()
    local WeakSet = __TS__Class()
    WeakSet.name = "WeakSet"
    function WeakSet.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "WeakSet"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self.items[result.value] = true
            end
        else
            for ____, value in ipairs(values) do
                self.items[value] = true
            end
        end
    end
    function WeakSet.prototype.add(self, value)
        self.items[value] = true
        return self
    end
    function WeakSet.prototype.delete(self, value)
        local contains = self:has(value)
        self.items[value] = nil
        return contains
    end
    function WeakSet.prototype.has(self, value)
        return self.items[value] == true
    end
    WeakSet[Symbol.species] = WeakSet
    return WeakSet
end)()

function __TS__SourceMapTraceBack(fileName, sourceMap)
    _G.__TS__sourcemap = _G.__TS__sourcemap or ({})
    _G.__TS__sourcemap[fileName] = sourceMap
    if _G.__TS__originalTraceback == nil then
        _G.__TS__originalTraceback = debug.traceback
        debug.traceback = function(thread, message, level)
            local trace
            if ((thread == nil) and (message == nil)) and (level == nil) then
                trace = _G.__TS__originalTraceback()
            else
                trace = _G.__TS__originalTraceback(thread, message, level)
            end
            if type(trace) ~= "string" then
                return trace
            end
            local result = string.gsub(
                trace,
                "(%S+).lua:(%d+)",
                function(file, line)
                    local fileSourceMap = _G.__TS__sourcemap[tostring(file) .. ".lua"]
                    if fileSourceMap and fileSourceMap[line] then
                        return (tostring(file) .. ".ts:") .. tostring(fileSourceMap[line])
                    end
                    return (tostring(file) .. ".lua:") .. tostring(line)
                end
            )
            return result
        end
    end
end

function __TS__Spread(iterable)
    local arr = {}
    if type(iterable) == "string" then
        do
            local i = 0
            while i < #iterable do
                arr[#arr + 1] = __TS__StringAccess(iterable, i)
                i = i + 1
            end
        end
    else
        for ____, item in __TS__Iterator(iterable) do
            arr[#arr + 1] = item
        end
    end
    return __TS__Unpack(arr)
end

function __TS__StringAccess(self, index)
    if (index >= 0) and (index < #self) then
        return string.sub(self, index + 1, index + 1)
    end
end

function __TS__StringCharAt(self, pos)
    if pos ~= pos then
        pos = 0
    end
    if pos < 0 then
        return ""
    end
    return string.sub(self, pos + 1, pos + 1)
end

function __TS__StringCharCodeAt(self, index)
    if index ~= index then
        index = 0
    end
    if index < 0 then
        return 0 / 0
    end
    return string.byte(self, index + 1) or (0 / 0)
end

function __TS__StringConcat(str1, ...)
    local args = {...}
    local out = str1
    for ____, arg in ipairs(args) do
        out = tostring(out) .. tostring(arg)
    end
    return out
end

function __TS__StringEndsWith(self, searchString, endPosition)
    if (endPosition == nil) or (endPosition > #self) then
        endPosition = #self
    end
    return string.sub(self, (endPosition - #searchString) + 1, endPosition) == searchString
end

function __TS__StringPadEnd(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if (maxLength == -math.huge) or (maxLength == math.huge) then
        error("Invalid string length", 0)
    end
    if (#self >= maxLength) or (#fillString == 0) then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = tostring(fillString) .. tostring(
            string.rep(
                fillString,
                math.floor(maxLength / #fillString)
            )
        )
    end
    return tostring(self) .. tostring(
        string.sub(
            fillString,
            1,
            math.floor(maxLength)
        )
    )
end

function __TS__StringPadStart(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if (maxLength == -math.huge) or (maxLength == math.huge) then
        error("Invalid string length", 0)
    end
    if (#self >= maxLength) or (#fillString == 0) then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = tostring(fillString) .. tostring(
            string.rep(
                fillString,
                math.floor(maxLength / #fillString)
            )
        )
    end
    return tostring(
        string.sub(
            fillString,
            1,
            math.floor(maxLength)
        )
    ) .. tostring(self)
end

function __TS__StringReplace(source, searchValue, replaceValue)
    searchValue = string.gsub(searchValue, "[%%%(%)%.%+%-%*%?%[%^%$]", "%%%1")
    if type(replaceValue) == "string" then
        replaceValue = string.gsub(replaceValue, "%%", "%%%%")
        local result = string.gsub(source, searchValue, replaceValue, 1)
        return result
    else
        local result = string.gsub(
            source,
            searchValue,
            function(match) return replaceValue(_G, match) end,
            1
        )
        return result
    end
end

function __TS__StringSlice(self, start, ____end)
    if (start == nil) or (start ~= start) then
        start = 0
    end
    if ____end ~= ____end then
        ____end = 0
    end
    if start >= 0 then
        start = start + 1
    end
    if (____end ~= nil) and (____end < 0) then
        ____end = ____end - 1
    end
    return string.sub(self, start, ____end)
end

function __TS__StringSplit(source, separator, limit)
    if limit == nil then
        limit = 4294967295
    end
    if limit == 0 then
        return {}
    end
    local out = {}
    local index = 0
    local count = 0
    if (separator == nil) or (separator == "") then
        while (index < (#source - 1)) and (count < limit) do
            out[count + 1] = __TS__StringAccess(source, index)
            count = count + 1
            index = index + 1
        end
    else
        local separatorLength = #separator
        local nextIndex = (string.find(source, separator, nil, true) or 0) - 1
        while (nextIndex >= 0) and (count < limit) do
            out[count + 1] = __TS__StringSubstring(source, index, nextIndex)
            count = count + 1
            index = nextIndex + separatorLength
            nextIndex = (string.find(
                source,
                separator,
                math.max(index + 1, 1),
                true
            ) or 0) - 1
        end
    end
    if count < limit then
        out[count + 1] = __TS__StringSubstring(source, index)
    end
    return out
end

function __TS__StringStartsWith(self, searchString, position)
    if (position == nil) or (position < 0) then
        position = 0
    end
    return string.sub(self, position + 1, #searchString + position) == searchString
end

function __TS__StringSubstr(self, from, length)
    if from ~= from then
        from = 0
    end
    if length ~= nil then
        if (length ~= length) or (length <= 0) then
            return ""
        end
        length = length + from
    end
    if from >= 0 then
        from = from + 1
    end
    return string.sub(self, from, length)
end

function __TS__StringSubstring(self, start, ____end)
    if ____end ~= ____end then
        ____end = 0
    end
    if (____end ~= nil) and (start > ____end) then
        start, ____end = __TS__Unpack({____end, start})
    end
    if start >= 0 then
        start = start + 1
    else
        start = 1
    end
    if (____end ~= nil) and (____end < 0) then
        ____end = 0
    end
    return string.sub(self, start, ____end)
end

function __TS__StringTrim(self)
    local result = string.gsub(self, "^[%s ﻿]*(.-)[%s ﻿]*$", "%1")
    return result
end

function __TS__StringTrimEnd(self)
    local result = string.gsub(self, "[%s ﻿]*$", "")
    return result
end

function __TS__StringTrimStart(self)
    local result = string.gsub(self, "^[%s ﻿]*", "")
    return result
end

____symbolRegistry = {}
function __TS__SymbolRegistryFor(key)
    if not ____symbolRegistry[key] then
        ____symbolRegistry[key] = __TS__Symbol(key)
    end
    return ____symbolRegistry[key]
end
function __TS__SymbolRegistryKeyFor(sym)
    for key in pairs(____symbolRegistry) do
        if ____symbolRegistry[key] == sym then
            return key
        end
    end
end

function __TS__TypeOf(value)
    local luaType = type(value)
    if luaType == "table" then
        return "object"
    elseif luaType == "nil" then
        return "undefined"
    else
        return luaType
    end
end

end,
["jsx"] = function() require("lualib_bundle");
local ____exports = {}
local ts = require("typescript")
local ____typescript_2Dto_2Dlua = require("typescript-to-lua")
local createCallExpression = ____typescript_2Dto_2Dlua.createCallExpression
local createIdentifier = ____typescript_2Dto_2Dlua.createIdentifier
local createNilLiteral = ____typescript_2Dto_2Dlua.createNilLiteral
local createStringLiteral = ____typescript_2Dto_2Dlua.createStringLiteral
local createTableIndexExpression = ____typescript_2Dto_2Dlua.createTableIndexExpression
local ____literal = require("typescript-to-lua.dist.transformation.visitors.literal")
local literalVisitors = ____literal.literalVisitors
local ____call = require("typescript-to-lua.dist.transformation.visitors.call")
local transformArguments = ____call.transformArguments
local ____lualib = require("typescript-to-lua.dist.transformation.utils.lualib")
local LuaLibFeature = ____lualib.LuaLibFeature
local transformLuaLibFunction = ____lualib.transformLuaLibFunction
local transformObjectLiteral = literalVisitors[ts.SyntaxKind.ObjectLiteralExpression]
local function transformJsxAttributesExpression(expression, context)
    local hasSpread = __TS__ArraySome(
        expression.properties,
        function(____, element) return element.kind == ts.SyntaxKind.JsxSpreadAttribute end
    )
    if hasSpread then
        local expressions = __TS__ArrayReduce(
            expression.properties,
            function(____, prev, element)
                if element.kind == ts.SyntaxKind.JsxSpreadAttribute then
                    local properties = {}
                    while prev[#prev] and (prev[#prev].kind == ts.SyntaxKind.PropertyAssignment) do
                        __TS__ArrayPush(
                            properties,
                            table.remove(prev)
                        )
                    end
                    local objectLiteral = ts:createObjectLiteral(properties)
                    return {
                        table.unpack(
                            __TS__ArrayConcat(
                                {
                                    table.unpack(prev)
                                },
                                {objectLiteral, element.expression}
                            )
                        )
                    }
                else
                    local valueOrExpression = (element.initializer and element.initializer) or ts:createLiteral(true)
                    return {
                        table.unpack(
                            __TS__ArrayConcat(
                                {
                                    table.unpack(prev)
                                },
                                {
                                    ts:createPropertyAssignment(element.name, valueOrExpression)
                                }
                            )
                        )
                    }
                end
            end,
            {}
        )
        local properties = {}
        while expressions[#expressions] and (expressions[#expressions].kind == ts.SyntaxKind.PropertyAssignment) do
            __TS__ArrayPush(
                properties,
                table.remove(expressions)
            )
        end
        local objectLiteral = ts:createObjectLiteral(properties)
        local objectExpressions = ((#properties > 0) and ({
            table.unpack(
                __TS__ArrayConcat(
                    {
                        table.unpack(expressions)
                    },
                    {objectLiteral}
                )
            )
        })) or expressions
        return transformLuaLibFunction(
            nil,
            context,
            LuaLibFeature.ObjectAssign,
            ts:createObjectLiteral({}, false),
            table.unpack(
                transformArguments(nil, context, objectExpressions)
            )
        )
    else
        local properties = __TS__ArrayMap(
            __TS__ArrayFilter(
                expression.properties,
                function(____, element) return element.kind ~= ts.SyntaxKind.JsxSpreadAttribute end
            ),
            function(____, element)
                local valueOrExpression = (element.initializer and element.initializer) or ts:createLiteral(true)
                return ts:createPropertyAssignment(element.name, valueOrExpression)
            end,
            {}
        )
        return transformObjectLiteral(
            nil,
            ts:createObjectLiteral(properties),
            context
        )
    end
end
local function transformJsxOpeningElement(expression, context, children)
    local library, create = table.unpack(
        (context.options.jsxFactory and __TS__StringSplit(context.options.jsxFactory, ".")) or ({"React", "createElement"})
    )
    local createElement = createTableIndexExpression(
        nil,
        createIdentifier(nil, library),
        createStringLiteral(nil, create)
    )
    local tagName = expression.tagName:getText()
    local tag = ((string.lower(tagName) == tagName) and createStringLiteral(nil, tagName)) or createIdentifier(nil, tagName)
    local props = transformJsxAttributesExpression(expression.attributes, context)
    if children then
        local childrenOrStringLiterals = __TS__ArrayMap(
            __TS__ArrayFilter(
                children,
                function(____, child) return (not ts:isJsxText(child)) or (__TS__StringTrim(child.text) ~= "") end
            ),
            function(____, child) return (ts:isJsxText(child) and ts:createStringLiteral(
                __TS__StringTrim(child.text)
            )) or child end
        )
        return createCallExpression(
            nil,
            createElement,
            {
                tag,
                props,
                table.unpack(
                    transformArguments(nil, context, childrenOrStringLiterals)
                )
            },
            expression
        )
    end
    return createCallExpression(nil, createElement, {tag, props}, expression)
end
local function transformJsxElement(expression, context)
    if ts:isJsxSelfClosingElement(expression) then
        return transformJsxOpeningElement(expression, context)
    end
    return transformJsxOpeningElement(expression.openingElement, context, expression.children)
end
____exports.default = {
    visitors = {
        [ts.SyntaxKind.JsxSelfClosingElement] = function(____, node, context) return transformJsxElement(node, context) end,
        [ts.SyntaxKind.JsxElement] = function(____, node, context) return transformJsxElement(node, context) end,
        [ts.SyntaxKind.JsxExpression] = function(____, node, context)
            if node.expression then
                return context:transformExpression(node.expression)
            end
            return createNilLiteral(nil)
        end
    }
}
return ____exports
end,
["theme.default-theme"] = function() require("lualib_bundle");
local ____exports = {}
local filesystem = require("gears.filesystem")
local beautiful = require("beautiful")
local gears = require("gears")
local dpi = beautiful.xresources.apply_dpi
local gtk_variable = beautiful.gtk.get_theme_variables
local theme_dir = tostring(
    filesystem.get_configuration_dir()
) .. "/theme"
local titlebar_theme = "stoplight"
local titlebar_icon_path = ((tostring(theme_dir) .. "/icons/titlebar/") .. tostring(titlebar_theme)) .. "/"
local tip = titlebar_icon_path
local theme = {}
theme.font = "Inter Regular 10"
theme.font_bold = "Inter Bold 10"
theme.icon_theme = "Tela-blue-dark"
local function awesome_overrides(theme)
    theme.dir = theme_dir
    theme.icons = tostring(theme.dir) .. "/icons/"
    theme.wallpaper = tostring(theme.dir) .. "/wallpapers/morning-wallpaper.jpg"
    theme.font = "Inter Regular 10"
    theme.fg_normal = "#ffffffde"
    theme.fg_focus = "#e4e4e4"
    theme.fg_urgent = "#CC9393"
    theme.bg_normal = theme.background
    theme.bg_focus = "#5a5a5a"
    theme.bg_urgent = "#3F3F3F"
    theme.bg_systray = theme.background
    theme.systray_icon_spacing = dpi(16)
    theme.menu_height = dpi(16)
    theme.menu_width = dpi(160)
    theme.tooltip_bg = "#232323"
    theme.tooltip_border_color = "#232323"
    theme.tooltip_border_width = 0
    theme.tooltip_shape = function(cr, w, h)
        gears.shape.rounded_rect(
            cr,
            w,
            h,
            dpi(6)
        )
    end
    theme.layout_max = tostring(theme.icons) .. "layouts/arrow-expand-all.png"
    theme.layout_tile = tostring(theme.icons) .. "layouts/view-quilt.png"
    theme.layout_floating = tostring(theme.icons) .. "layouts/floating.png"
    theme.groups_title_bg = "#ffffff15"
    theme.groups_bg = "#ffffff10"
    theme.groups_radius = dpi(16)
    theme.leave_event = theme.transparent
    theme.enter_event = "#ffffff10"
    theme.press_event = "#ffffff15"
    theme.release_event = "#ffffff10"
    theme.border_focus = gtk_variable().bg_color
    theme.border_normal = gtk_variable().base_color
    theme.border_marked = "#CC9393"
    theme.border_width = dpi(0)
    theme.border_radius = dpi(12)
    theme.client_radius = dpi(9)
    theme.useless_gap = dpi(4)
    theme.menu_font = "Inter Regular 11"
    theme.menu_submenu = ""
    theme.menu_height = dpi(34)
    theme.menu_width = dpi(200)
    theme.menu_border_width = dpi(20)
    theme.menu_bg_focus = tostring(theme.accent) .. "CC"
    theme.menu_fg_normal = "#ffffff"
    theme.menu_fg_focus = "#ffffff"
    theme.tooltip_bg = theme.background
    theme.tooltip_border_color = theme.transparent
    theme.tooltip_border_width = 0
    theme.tooltip_gaps = dpi(5)
    theme.tooltip_shape = function(cr, w, h)
        gears.shape.rounded_rect(
            cr,
            w,
            h,
            dpi(6)
        )
    end
    theme.separator_color = "#f2f2f244"
    theme.layout_max = tostring(theme.icons) .. "layouts/max.svg"
    theme.layout_tile = tostring(theme.icons) .. "layouts/tile.svg"
    theme.layout_dwindle = tostring(theme.icons) .. "layouts/dwindle.svg"
    theme.layout_floating = tostring(theme.icons) .. "layouts/floating.svg"
    theme.taglist_bg_empty = tostring(theme.background) .. "99"
    theme.taglist_bg_occupied = "#ffffff1A"
    theme.taglist_bg_urgent = "#E91E6399"
    theme.taglist_bg_focus = theme.background
    theme.taglist_spacing = dpi(0)
    theme.tasklist_font = "Inter Regular 10"
    theme.tasklist_bg_normal = tostring(theme.background) .. "99"
    theme.tasklist_bg_focus = theme.background
    theme.tasklist_bg_urgent = "#E91E6399"
    theme.tasklist_fg_focus = "#DDDDDD"
    theme.tasklist_fg_urgent = "#ffffff"
    theme.tasklist_fg_normal = "#AAAAAA"
    theme.notification_position = "top_left"
    theme.notification_bg = theme.transparent
    theme.notification_margin = dpi(5)
    theme.notification_border_width = dpi(0)
    theme.notification_border_color = theme.transparent
    theme.notification_spacing = dpi(5)
    theme.notification_icon_resize_strategy = "center"
    theme.notification_icon_size = dpi(32)
    theme.snap_bg = theme.background
    theme.snap_shape = gears.shape.rectangle
    theme.snap_border_width = dpi(15)
    theme.hotkeys_font = "Inter Bold"
    theme.hotkeys_description_font = "Inter Regular Regular"
    theme.hotkeys_bg = theme.background
    theme.hotkeys_group_margin = dpi(20)
    theme.titlebar_size = dpi(34)
    theme.titlebar_bg_focus = tostring(
        __TS__StringSubstr(
            gtk_variable().bg_color,
            0,
            7
        )
    ) .. "66"
    theme.titlebar_bg_normal = tostring(
        __TS__StringSubstr(
            gtk_variable().base_color,
            0,
            7
        )
    ) .. "66"
    theme.titlebar_fg_focus = tostring(
        gtk_variable().fg_color
    ) .. "00"
    theme.titlebar_fg_normal = tostring(
        gtk_variable().fg_color
    ) .. "00"
    theme.titlebar_close_button_normal = tostring(tip) .. "close_normal.svg"
    theme.titlebar_close_button_focus = tostring(tip) .. "close_focus.svg"
    theme.titlebar_minimize_button_normal = tostring(tip) .. "minimize_normal.svg"
    theme.titlebar_minimize_button_focus = tostring(tip) .. "minimize_focus.svg"
    theme.titlebar_ontop_button_normal_inactive = tostring(tip) .. "ontop_normal_inactive.svg"
    theme.titlebar_ontop_button_focus_inactive = tostring(tip) .. "ontop_focus_inactive.svg"
    theme.titlebar_ontop_button_normal_active = tostring(tip) .. "ontop_normal_active.svg"
    theme.titlebar_ontop_button_focus_active = tostring(tip) .. "ontop_focus_active.svg"
    theme.titlebar_sticky_button_normal_inactive = tostring(tip) .. "sticky_normal_inactive.svg"
    theme.titlebar_sticky_button_focus_inactive = tostring(tip) .. "sticky_focus_inactive.svg"
    theme.titlebar_sticky_button_normal_active = tostring(tip) .. "sticky_normal_active.svg"
    theme.titlebar_sticky_button_focus_active = tostring(tip) .. "sticky_focus_active.svg"
    theme.titlebar_floating_button_normal_inactive = tostring(tip) .. "floating_normal_inactive.svg"
    theme.titlebar_floating_button_focus_inactive = tostring(tip) .. "floating_focus_inactive.svg"
    theme.titlebar_floating_button_normal_active = tostring(tip) .. "floating_normal_active.svg"
    theme.titlebar_floating_button_focus_active = tostring(tip) .. "floating_focus_active.svg"
    theme.titlebar_maximized_button_normal_inactive = tostring(tip) .. "maximized_normal_inactive.svg"
    theme.titlebar_maximized_button_focus_inactive = tostring(tip) .. "maximized_focus_inactive.svg"
    theme.titlebar_maximized_button_normal_active = tostring(tip) .. "maximized_normal_active.svg"
    theme.titlebar_maximized_button_focus_active = tostring(tip) .. "maximized_focus_active.svg"
    theme.titlebar_close_button_normal_hover = tostring(tip) .. "close_normal_hover.svg"
    theme.titlebar_close_button_focus_hover = tostring(tip) .. "close_focus_hover.svg"
    theme.titlebar_minimize_button_normal_hover = tostring(tip) .. "minimize_normal_hover.svg"
    theme.titlebar_minimize_button_focus_hover = tostring(tip) .. "minimize_focus_hover.svg"
    theme.titlebar_ontop_button_normal_inactive_hover = tostring(tip) .. "ontop_normal_inactive_hover.svg"
    theme.titlebar_ontop_button_focus_inactive_hover = tostring(tip) .. "ontop_focus_inactive_hover.svg"
    theme.titlebar_ontop_button_normal_active_hover = tostring(tip) .. "ontop_normal_active_hover.svg"
    theme.titlebar_ontop_button_focus_active_hover = tostring(tip) .. "ontop_focus_active_hover.svg"
    theme.titlebar_sticky_button_normal_inactive_hover = tostring(tip) .. "sticky_normal_inactive_hover.svg"
    theme.titlebar_sticky_button_focus_inactive_hover = tostring(tip) .. "sticky_focus_inactive_hover.svg"
    theme.titlebar_sticky_button_normal_active_hover = tostring(tip) .. "sticky_normal_active_hover.svg"
    theme.titlebar_sticky_button_focus_active_hover = tostring(tip) .. "sticky_focus_active_hover.svg"
    theme.titlebar_floating_button_normal_inactive_hover = tostring(tip) .. "floating_normal_inactive_hover.svg"
    theme.titlebar_floating_button_focus_inactive_hover = tostring(tip) .. "floating_focus_inactive_hover.svg"
    theme.titlebar_floating_button_normal_active_hover = tostring(tip) .. "floating_normal_active_hover.svg"
    theme.titlebar_floating_button_focus_active_hover = tostring(tip) .. "floating_focus_active_hover.svg"
    theme.titlebar_maximized_button_normal_inactive_hover = tostring(tip) .. "maximized_normal_inactive_hover.svg"
    theme.titlebar_maximized_button_focus_inactive_hover = tostring(tip) .. "maximized_focus_inactive_hover.svg"
    theme.titlebar_maximized_button_normal_active_hover = tostring(tip) .. "maximized_normal_active_hover.svg"
    theme.titlebar_maximized_button_focus_active_hover = tostring(tip) .. "maximized_focus_active_hover.svg"
end
____exports.default = {theme = theme, awesome_overrides = awesome_overrides}
return ____exports
end,
["theme.werewolf.index"] = function() require("lualib_bundle");
local ____exports = {}
local filesystem = require("gears.filesystem")
local theme_dir = tostring(
    filesystem.get_configuration_dir()
) .. "/theme"
local theme = {}
theme.icons = tostring(theme_dir) .. "/icons/"
theme.font = "Inter Regular 10"
theme.font_bold = "Inter Bold 10"
theme.system_black_dark = "#3D4C5F"
theme.system_black_light = "#56687E"
theme.system_red_dark = "#EE4F84"
theme.system_red_light = "#F48FB1"
theme.system_green_dark = "#53E2AE"
theme.system_green_light = "#A1EFD3"
theme.system_yellow_dark = "#F1FF52"
theme.system_yellow_light = "#F1FA8C"
theme.system_blue_dark = "#6498EF"
theme.system_blue_light = "#92B6F4"
theme.system_magenta_dark = "#985EFF"
theme.system_magenta_light = "#BD99FF"
theme.system_cyan_dark = "#24D1E7"
theme.system_cyan_light = "#87DFEB"
theme.system_white_dark = "#E5E5E5"
theme.system_white_light = "#F8F8F2"
theme.accent = theme.system_blue_dark
theme.background = "#00000066"
theme.background_light = "#f2f2f266"
theme.transparent = "#00000000"
theme.awesome_icon = tostring(theme.icons) .. "awesome.svg"
____exports.awesome_overrides = function(theme)
end
____exports.default = {theme = theme, awesome_overrides = ____exports.awesome_overrides}
return ____exports
end,
["theme.index"] = function() require("lualib_bundle");
local ____exports = {}
local gtable = require("gears.table")
local ____default_2Dtheme = require("theme.default-theme")
local defaultTheme = ____default_2Dtheme.default
local ____index = require("theme.werewolf.index")
local theme = ____index.default
local finalTheme = {}
gtable.crush(finalTheme, defaultTheme.theme)
gtable.crush(finalTheme, theme.theme)
defaultTheme.awesome_overrides(finalTheme)
theme.awesome_overrides(finalTheme)
____exports.default = finalTheme
return ____exports
end,
["awesome.jsx-factory"] = function() require("lualib_bundle");
local ____exports = {}
local function createMap(attributes, children)
    if children == nil then
        children = {}
    end
    local map = {}
    for ____, ____value in ipairs(
        __TS__ObjectEntries(attributes)
    ) do
        local key
        key = ____value[1]
        local value
        value = ____value[2]
        map[key] = value
    end
    for i = 0, #children do
        map[i + 1] = children[i + 1]
    end
    return map
end
function ____exports.isArray(value)
    if type(value) ~= "table" then
        return false
    end
    local i = 0
    local ____table = value
    for ____, key in ipairs(
        __TS__ObjectKeys(____table)
    ) do
        if ____table[i + 1] == nil then
            return false
        end
        i = i + 1
    end
    return true
end
local function mapIntoArray(children, array, func)
    local invokeCallback = false
    if children == nil then
        invokeCallback = true
    else
        local ____switch12 = type(children)
        if ____switch12 == "string" then
            goto ____switch12_case_0
        elseif ____switch12 == "number" then
            goto ____switch12_case_1
        end
        goto ____switch12_end
        ::____switch12_case_0::
        do
        end
        ::____switch12_case_1::
        do
            invokeCallback = true
            goto ____switch12_end
        end
        ::____switch12_end::
    end
    if invokeCallback then
        local child = children
        local mappedChild = func(child)
        if ____exports.isArray(mappedChild) then
            mapIntoArray(mappedChild, array, func)
        else
            __TS__ArrayPush(array, mappedChild)
        end
        return 1
    end
    local subTreeCount = 0
    if ____exports.isArray(children) then
        for i = 0, #children do
            subTreeCount = subTreeCount + mapIntoArray(children[i + 1], array, func)
        end
    else
    end
    return subTreeCount
end
local function mapChildren(children, func)
    if children == nil then
        return children
    end
    local result = {}
    local count = 0
    mapIntoArray(
        children,
        result,
        function(child) return func(
            child,
            (function()
                local ____tmp = count
                count = ____tmp + 1
                return ____tmp
            end)()
        ) end
    )
    return result
end
local function toArray(children)
    return mapChildren(
        children,
        function(child) return child end
    ) or ({})
end
function ____exports.nodeToString(node, level)
    if level == nil then
        level = 0
    end
    if node == nil then
        return "undefined"
    end
    local tabs = ""
    for i = 0, level do
        tabs = tostring(tabs) .. "  "
    end
    local ____switch28 = type(node)
    if ____switch28 == "string" then
        goto ____switch28_case_0
    elseif ____switch28 == "number" then
        goto ____switch28_case_1
    elseif ____switch28 == "boolean" then
        goto ____switch28_case_2
    elseif ____switch28 == "table" then
        goto ____switch28_case_3
    end
    goto ____switch28_case_default
    ::____switch28_case_0::
    do
        return tostring(node)
    end
    ::____switch28_case_1::
    do
        return tostring(
            tostring(node)
        )
    end
    ::____switch28_case_2::
    do
        return tostring((node and "true") or "false")
    end
    ::____switch28_case_3::
    do
        do
            local ____table = node
            local body = table.concat(
                __TS__ArrayMap(
                    __TS__ObjectEntries(____table),
                    function(____, ____bindingPattern0)
                        local key
                        key = ____bindingPattern0[1]
                        local value
                        value = ____bindingPattern0[2]
                        return (((tostring(tabs) .. "  ") .. tostring(key)) .. ": ") .. tostring(
                            ____exports.nodeToString(value, level + 2)
                        )
                    end
                ),
                ",\n" or ","
            )
            return ((((tostring(tabs) .. "{\n") .. tostring(body)) .. "\n") .. tostring(tabs)) .. "}"
        end
    end
    ::____switch28_case_default::
    do
        return "undefined"
    end
    ::____switch28_end::
end
function ____exports.flattenOneLevel(children)
    local result = {}
    for i = 0, #children do
        local item = children[i + 1]
        if ____exports.isArray(item) then
            for j = 0, #item do
                __TS__ArrayPush(result, item[j + 1])
            end
        else
            __TS__ArrayPush(result, item)
        end
    end
    return result
end
function ____exports.createElement(tagName, attributes, ...)
    local children = {...}
    if tagName == "base" then
        return createMap(
            attributes,
            ____exports.flattenOneLevel(children)
        )
    elseif tagName == "fragment" then
        return createMap({}, children)
    elseif tagName ~= nil then
        return tagName(
            __TS__ObjectAssign(
                {},
                attributes,
                {
                    children = ____exports.flattenOneLevel(children)
                }
            )
        )
    end
    return nil
end
return ____exports
end,
["awesome.jsx"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx_2Dfactory = require("awesome.jsx-factory")
local createElement = ____jsx_2Dfactory.createElement
____exports.default = {createElement = createElement}
return ____exports
end,
["awesome.components.naughty"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local naughty = require("naughty")
____exports.NaughtyIcon = function(____bindingPattern0)
    local children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = naughty.widget.icon})
    )
end
____exports.NaughtyTitle = function(____bindingPattern0)
    local children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = naughty.widget.title})
    )
end
____exports.NaughtyMessage = function(____bindingPattern0)
    local children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = naughty.widget.message})
    )
end
return ____exports
end,
["awesome.components.titlebar"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
____exports.ClientIcon = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.iconwidget(client)
end
____exports.OnTopButton = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.ontopbutton(client)
end
____exports.FloatingButton = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.floatingbutton(client)
end
____exports.MinimizeButton = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.minimizebutton(client)
end
____exports.MaximizedButton = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.maximizedbutton(client)
end
____exports.CloseButton = function(____bindingPattern0)
    local client
    client = ____bindingPattern0.client
    return awful.titlebar.widget.closebutton(client)
end
return ____exports
end,
["awesome.components.wibox"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local wibox = require("wibox")
____exports.Background = function(____bindingPattern0)
    local children
    children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = wibox.container.background}),
        children
    )
end
____exports.Constraint = function(____bindingPattern0)
    local children
    children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = wibox.container.constraint}),
        children
    )
end
return ____exports
end,
["awesome.components.base"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local wibox = require("wibox")
local awful = require("awful")
____exports.Text = function(____bindingPattern0)
    local markup
    markup = ____bindingPattern0.markup
    if markup == nil then
        markup = false
    end
    local children
    children = ____bindingPattern0.children
    if children == nil then
        children = ""
    end
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {markup = true, children = true, rest = true})
    if markup then
        return Awesome.createElement(
            "base",
            __TS__ObjectAssign(
                {},
                rest,
                {
                    widget = wibox.widget.textbox,
                    markup = table.concat(children, "" or ",")
                }
            )
        )
    end
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign(
            {},
            rest,
            {
                widget = wibox.widget.textbox,
                text = table.concat(children, "" or ",")
            }
        )
    )
end
____exports.Image = function(props)
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, props, {widget = wibox.widget.imagebox})
    )
end
____exports.Margin = function(____bindingPattern0)
    local children
    children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {widget = wibox.container.margin}),
        children
    )
end
____exports.Layout = function(____bindingPattern0)
    local fixed
    fixed = ____bindingPattern0.fixed
    if fixed == nil then
        fixed = false
    end
    local flex
    flex = ____bindingPattern0.flex
    if flex == nil then
        flex = false
    end
    local align
    align = ____bindingPattern0.align
    if align == nil then
        align = false
    end
    local vertical
    vertical = ____bindingPattern0.vertical
    if vertical == nil then
        vertical = false
    end
    local horizontal
    horizontal = ____bindingPattern0.horizontal
    if horizontal == nil then
        horizontal = false
    end
    local children
    children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {fixed = true, flex = true, align = true, vertical = true, horizontal = true, children = true, rest = true})
    local layout
    if fixed then
        if horizontal then
            layout = wibox.layout.fixed.horizontal
        elseif vertical then
            layout = wibox.layout.fixed.vertical
        end
    elseif flex then
        if horizontal then
            layout = wibox.layout.flex.horizontal
        elseif vertical then
            layout = wibox.layout.flex.vertical
        end
    elseif align then
        if horizontal then
            layout = wibox.layout.align.horizontal
        elseif vertical then
            layout = wibox.layout.align.vertical
        end
    end
    if layout == nil then
        return Awesome.createElement(
            "base",
            __TS__ObjectAssign({}, rest),
            children
        )
    end
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, rest, {layout = layout}),
        children
    )
end
____exports.Tooltip = function(props)
    return awful.tooltip(props)
end
do
    local ____export = require("awesome.components.naughty")
    for ____exportKey, ____exportValue in pairs(____export) do
        ____exports[____exportKey] = ____exportValue
    end
end
do
    local ____export = require("awesome.components.titlebar")
    for ____exportKey, ____exportValue in pairs(____export) do
        ____exports[____exportKey] = ____exportValue
    end
end
do
    local ____export = require("awesome.components.wibox")
    for ____exportKey, ____exportValue in pairs(____export) do
        ____exports[____exportKey] = ____exportValue
    end
end
return ____exports
end,
["configuration.config"] = function() require("lualib_bundle");
local ____exports = {}
local filesystem = require("gears.filesystem")
local awful = require("awful")
local config_dir = filesystem.get_configuration_dir()
local bin_dir = tostring(config_dir) .. "utilities/"
local apps = {
    default = {
        terminal = os.getenv("TERMINAL") or "kitty",
        textEditor = "code",
        terminalEditor = os.getenv("EDITOR") or "vim",
        browser = os.getenv("BROWSER") or "google-chrome-stable",
        fileManager = "caja",
        networkManager = "nm-connection-editor",
        bluetoothManager = "blueman-manager",
        powerManager = "xfce4-power-manager",
        packageManager = "pamac-manager",
        lock = "awesome-client \"awesome.emit_signal('module::lockscreen_show')\"",
        screenshot = "spectacle --region",
        quake = "kitty --name QuakeTerminal",
        editor = "vim",
        rofiAppmenu = ((("rofi -dpi " .. tostring(screen.primary.dpi)) .. " -show drun -theme ") .. tostring(config_dir)) .. "configuration/rofi/appmenu/rofi.rasi"
    },
    startUp = {
        "force-composition-pipeline",
        ("picom -b --experimental-backends --dbus --config " .. tostring(config_dir)) .. "/configuration/picom.conf",
        "xrdb merge .Xresources",
        "start-pulseaudio-x11",
        "redshift -l 40.014984:-105.270546",
        "blueberry-tray"
    }
}
local config = {debug = false, modkey = "Mod4", laptop = false, militaryTime = false, layouts = {awful.layout.suit.spiral.dwindle, awful.layout.suit.tile.left, awful.layout.suit.floating, awful.layout.suit.max}, module = {auto_start = {debug_mode = false}, dynamic_wallpaper = {wall_dir = "theme/wallpapers/", valid_picture_formats = {"jpg", "png", "jpeg"}, stretch = false}}, apps = apps}
____exports.default = config
return ____exports
end,
["widgets.clickable-container"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local wibox = require("wibox")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Background = ____base.Background
local function createClickable(onButtonPress)
    local container = wibox.widget(
        Awesome.createElement(Background, {})
    )
    local oldCursor = nil
    local oldWibox = nil
    container:connect_signal(
        "mouse::enter",
        function()
            container.bg = beautiful.groups_bg
            local currentWibox = mouse.current_wibox
            if currentWibox then
                oldCursor = currentWibox.cursor
                oldWibox = currentWibox
                currentWibox.cursor = "hand1"
            end
        end
    )
    container:connect_signal(
        "mouse::leave",
        function()
            container.bg = beautiful.leave_event
            if oldWibox then
                oldWibox.cursor = oldCursor
                oldWibox = nil
            end
        end
    )
    container:connect_signal(
        "button::press",
        function()
            container.bg = beautiful.press_event
        end
    )
    container:connect_signal(
        "button::release",
        function()
            container.bg = beautiful.release_event
        end
    )
    if onButtonPress then
        container:connect_signal(
            "button::press",
            function(____self, lx, ly, button)
                onButtonPress(button)
            end
        )
    end
    return container
end
____exports.Clickable = function(____bindingPattern0)
    local onButtonPress
    onButtonPress = ____bindingPattern0.onButtonPress
    local children
    children = ____bindingPattern0.children
    local rest
    rest = __TS__ObjectRest(____bindingPattern0, {onButtonPress = true, children = true, rest = true})
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign(
            {},
            rest,
            {
                widget = function() return createClickable(onButtonPress) end
            }
        ),
        children
    )
end
return ____exports
end,
["awesome.components.types"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
function ____exports.convertButtonEventsToAwesomeButtons(events)
    local buttons = {}
    if events.onLeftClick then
        __TS__ArrayPush(
            buttons,
            awful.button({}, 1, events.onLeftClick)
        )
    end
    if events.onMiddleClick then
        __TS__ArrayPush(
            buttons,
            awful.button({}, 2, events.onMiddleClick)
        )
    end
    if events.onRightClick then
        __TS__ArrayPush(
            buttons,
            awful.button({}, 3, events.onRightClick)
        )
    end
    if events.onScrollUp then
        __TS__ArrayPush(
            buttons,
            awful.button({}, 4, events.onScrollUp)
        )
    end
    if events.onScrollDown then
        __TS__ArrayPush(
            buttons,
            awful.button({}, 5, events.onScrollDown)
        )
    end
    return buttons
end
return ____exports
end,
["awesome.components.panel"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local wibox = require("wibox")
local ____types = require("awesome.components.types")
local convertButtonEventsToAwesomeButtons = ____types.convertButtonEventsToAwesomeButtons
____exports.TagList = function(____bindingPattern0)
    local screen
    screen = ____bindingPattern0.screen
    local all
    all = ____bindingPattern0.all
    if all == nil then
        all = false
    end
    local selected
    selected = ____bindingPattern0.selected
    if selected == nil then
        selected = false
    end
    local noempty
    noempty = ____bindingPattern0.noempty
    if noempty == nil then
        noempty = false
    end
    local tag
    tag = ____bindingPattern0.tag
    local onLeftClick
    onLeftClick = ____bindingPattern0.onLeftClick
    local onMiddleClick
    onMiddleClick = ____bindingPattern0.onMiddleClick
    local onRightClick
    onRightClick = ____bindingPattern0.onRightClick
    local onScrollDown
    onScrollDown = ____bindingPattern0.onScrollDown
    local onScrollUp
    onScrollUp = ____bindingPattern0.onScrollUp
    local filter = awful.widget.taglist.filter.all
    if all then
        filter = awful.widget.taglist.filter.all
    elseif selected then
        filter = awful.widget.taglist.filter.selected
    elseif noempty then
        filter = awful.widget.taglist.filter.noempty
    end
    local options = {
        screen = screen,
        filter = filter,
        buttons = convertButtonEventsToAwesomeButtons({onLeftClick = onLeftClick, onMiddleClick = onMiddleClick, onRightClick = onRightClick, onScrollDown = onScrollDown, onScrollUp = onScrollUp})
    }
    if tag then
        options.widget_template = tag
    end
    return awful.widget.taglist(options)
end
____exports.TaskList = function(____bindingPattern0)
    local screen
    screen = ____bindingPattern0.screen
    local allscreen
    allscreen = ____bindingPattern0.allscreen
    if allscreen == nil then
        allscreen = false
    end
    local alltags
    alltags = ____bindingPattern0.alltags
    if alltags == nil then
        alltags = false
    end
    local currenttags
    currenttags = ____bindingPattern0.currenttags
    if currenttags == nil then
        currenttags = false
    end
    local minimizedcurrenttags
    minimizedcurrenttags = ____bindingPattern0.minimizedcurrenttags
    if minimizedcurrenttags == nil then
        minimizedcurrenttags = false
    end
    local focused
    focused = ____bindingPattern0.focused
    if focused == nil then
        focused = false
    end
    local task
    task = ____bindingPattern0.task
    local onLeftClick
    onLeftClick = ____bindingPattern0.onLeftClick
    local onMiddleClick
    onMiddleClick = ____bindingPattern0.onMiddleClick
    local onRightClick
    onRightClick = ____bindingPattern0.onRightClick
    local onScrollDown
    onScrollDown = ____bindingPattern0.onScrollDown
    local onScrollUp
    onScrollUp = ____bindingPattern0.onScrollUp
    local filter = awful.widget.tasklist.filter.currenttags
    if allscreen then
        filter = awful.widget.tasklist.filter.allscreen
    elseif alltags then
        filter = awful.widget.tasklist.filter.alltags
    elseif currenttags then
        filter = awful.widget.tasklist.filter.currenttags
    elseif minimizedcurrenttags then
        filter = awful.widget.tasklist.filter.minimizedcurrenttags
    elseif focused then
        filter = awful.widget.tasklist.filter.focused
    end
    local options = {
        screen = screen,
        filter = filter,
        buttons = convertButtonEventsToAwesomeButtons({onLeftClick = onLeftClick, onMiddleClick = onMiddleClick, onRightClick = onRightClick, onScrollDown = onScrollDown, onScrollUp = onScrollUp})
    }
    if task then
        options.widget_template = task
    end
    return awful.widget.tasklist(options)
end
____exports.SystemTray = function(props)
    return Awesome.createElement(
        "base",
        __TS__ObjectAssign({}, props, {widget = wibox.widget.systray})
    )
end
____exports.TextClock = function(props)
    return wibox.widget(
        Awesome.createElement(
            "base",
            __TS__ObjectAssign({}, props, {widget = wibox.widget.textclock})
        )
    )
end
return ____exports
end,
["layout.panel-outline"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local wibox = require("wibox")
local gears = require("gears")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Background = ____base.Background
local Margin = ____base.Margin
local dpi = beautiful.xresources.apply_dpi
____exports.PanelOutline = function(____bindingPattern0)
    local children
    children = ____bindingPattern0.children
    return wibox.widget(
        Awesome.createElement(
            Margin,
            {
                top = dpi(9),
                bottom = dpi(9)
            },
            Awesome.createElement(
                Background,
                {
                    bg = beautiful.transparent,
                    shape = function(cr, w, h)
                        gears.shape.rounded_rect(
                            cr,
                            w,
                            h,
                            dpi(12)
                        )
                    end,
                    border_color = beautiful.groups_title_bg,
                    border_width = dpi(1)
                },
                children
            )
        )
    )
end
return ____exports
end,
["layout.components.clock"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local gears = require("gears")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Margin = ____base.Margin
local Tooltip = ____base.Tooltip
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local ____panel = require("awesome.components.panel")
local TextClock = ____panel.TextClock
local ____panel_2Doutline = require("layout.panel-outline")
local PanelOutline = ____panel_2Doutline.PanelOutline
local dpi = beautiful.xresources.apply_dpi
local function PlainClock(____bindingPattern0)
    local militaryTime
    militaryTime = ____bindingPattern0.militaryTime
    if militaryTime == nil then
        militaryTime = false
    end
    local font
    font = ____bindingPattern0.font
    local onButtonPress
    onButtonPress = ____bindingPattern0.onButtonPress
    return Awesome.createElement(
        Clickable,
        {onButtonPress = onButtonPress},
        Awesome.createElement(
            Margin,
            {
                margins = dpi(7)
            },
            Awesome.createElement(
                TextClock,
                {
                    format = ((("<span font=\"" .. tostring(font)) .. "\">") .. tostring((militaryTime and "%H:%M") or "%I:%M %p")) .. "</span>"
                }
            )
        )
    )
end
local function Calendar(____bindingPattern0)
    local font
    font = ____bindingPattern0.font
    local screen
    screen = ____bindingPattern0.screen
    return awful.widget.calendar_popup.month(
        {
            screen = screen,
            font = font,
            start_sunday = true,
            spacing = dpi(5),
            long_weekdays = true,
            margin = dpi(5),
            style_month = {
                border_width = dpi(0),
                bg_color = beautiful.background,
                padding = dpi(20),
                shape = function(cr, width, height)
                    gears.shape.partially_rounded_rect(cr, width, height, true, true, true, true, beautiful.groups_radius)
                end
            },
            style_header = {border_width = 0, bg_color = beautiful.transparent},
            style_weekday = {border_width = 0, bg_color = beautiful.transparent},
            style_normal = {border_width = 0, bg_color = beautiful.transparent},
            style_focus = {
                border_width = dpi(0),
                border_color = beautiful.fg_normal,
                bg_color = beautiful.accent,
                shape = function(cr, width, height)
                    gears.shape.partially_rounded_rect(
                        cr,
                        width,
                        height,
                        true,
                        true,
                        true,
                        true,
                        dpi(4)
                    )
                end
            }
        }
    )
end
local function getOridinal(day)
    if day == nil then
        day = os.date("%d")
    end
    local oridnal = "th"
    local lastDigit = string.sub(day, -1)
    if (lastDigit == "1") and (day ~= "11") then
        oridnal = "st"
    elseif (lastDigit == "2") and (day ~= "12") then
        oridnal = "nd"
    elseif (lastDigit == "3") and (day ~= "13") then
        oridnal = "rd"
    end
    return oridnal
end
____exports.Clock = function(____bindingPattern0)
    local militaryTime
    militaryTime = ____bindingPattern0.militaryTime
    if militaryTime == nil then
        militaryTime = false
    end
    local font
    font = ____bindingPattern0.font
    local screen
    screen = ____bindingPattern0.screen
    local calendarPosition
    calendarPosition = ____bindingPattern0.calendarPosition
    if calendarPosition == nil then
        calendarPosition = "tr"
    end
    local function openClockToolTip(button)
        if screen.clockTooltip then
            local clockTooltip = screen.clockTooltip
            if clockTooltip.visible and (button == 1) then
                clockTooltip.visible = false
            end
        end
    end
    local clock = Awesome.createElement(
        PanelOutline,
        {},
        Awesome.createElement(PlainClock, {font = font, militaryTime = militaryTime, onButtonPress = openClockToolTip})
    )
    local clockTooltip = Awesome.createElement(
        Tooltip,
        {
            objects = {clock},
            mode = "outside",
            preferred_positions = {"bottom", "right", "left", "top"},
            preferred_alignments = {"middle", "front", "back"},
            margin_leftright = dpi(8),
            margin_topbottom = dpi(8),
            timer_function = function()
                local day = os.date("%d")
                local oridnal = getOridinal(day)
                local month = os.date("%B")
                local firstDigit = string.sub(day, 0, 1)
                local lastDigit = string.sub(day, -1)
                if firstDigit == "0" then
                    day = lastDigit
                end
                return ((((("Today is the <b>" .. tostring(day)) .. tostring(oridnal)) .. " of ") .. tostring(month)) .. "</b>\nAnd it's ") .. tostring(
                    os.date("%A")
                )
            end
        }
    )
    screen.clockTooltip = clockTooltip
    local calendar = Awesome.createElement(Calendar, {font = font, screen = screen})
    calendar:attach(clock, calendarPosition, {on_hover = false, on_pressed = true})
    return clock
end
return ____exports
end,
["layout.components.layout-status"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local gears = require("gears")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Margin = ____base.Margin
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local ____panel_2Doutline = require("layout.panel-outline")
local PanelOutline = ____panel_2Doutline.PanelOutline
local dpi = beautiful.xresources.apply_dpi
____exports.LayoutStatus = function(____bindingPattern0)
    local screen
    screen = ____bindingPattern0.screen
    local buttons = gears.table.join(
        awful.button(
            {},
            1,
            function()
                awful.layout.inc(1)
            end
        ),
        awful.button(
            {},
            3,
            function()
                awful.layout.inc(-1)
            end
        ),
        awful.button(
            {},
            4,
            function()
                awful.layout.inc(1)
            end
        ),
        awful.button(
            {},
            5,
            function()
                awful.layout.inc(-1)
            end
        )
    )
    return Awesome.createElement(
        PanelOutline,
        {},
        Awesome.createElement(
            Clickable,
            {buttons = buttons},
            Awesome.createElement(
                Margin,
                {
                    margins = dpi(7)
                },
                awful.widget.layoutbox(screen)
            )
        )
    )
end
return ____exports
end,
["layout.components.bluetooth"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local wibox = require("wibox")
local gears = require("gears")
local filesystem = require("gears.filesystem")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Image = ____base.Image
local Layout = ____base.Layout
local Margin = ____base.Margin
local Tooltip = ____base.Tooltip
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local ____panel_2Doutline = require("layout.panel-outline")
local PanelOutline = ____panel_2Doutline.PanelOutline
local ____config = require("configuration.config")
local config = ____config.default
local dpi = beautiful.xresources.apply_dpi
local ____ = config.apps.default
local bluetoothManager = ____.bluetoothManager
local widgetIconDir = tostring(
    filesystem.get_configuration_dir()
) .. "images/widgets/bluetooth/"
____exports.Bluetooth = function()
    local icon = wibox.widget(
        Awesome.createElement(
            Image,
            {
                id = "icon",
                image = tostring(widgetIconDir) .. "bluetooth-off.svg",
                resize = true
            }
        )
    )
    local image = Awesome.createElement(Layout, {align = true, horizontal = true}, icon)
    local buttons = gears.table.join(
        awful.button(
            {},
            1,
            function()
            end,
            function()
                awful.spawn(bluetoothManager, false)
            end
        )
    )
    local button = Awesome.createElement(
        PanelOutline,
        {},
        Awesome.createElement(
            Clickable,
            {buttons = buttons},
            Awesome.createElement(
                Margin,
                {
                    margins = dpi(7)
                },
                image
            )
        )
    )
    local tooltip = Awesome.createElement(
        Tooltip,
        {
            objects = {button},
            mode = "outside",
            align = "right",
            margin_leftright = dpi(8),
            margin_topbottom = dpi(8),
            preferred_positions = {"right", "left", "top", "bottom"}
        }
    )
    awful.widget.watch(
        "rfkill list bluetooth",
        5,
        function(_, stdout)
            local widgetIconName = ""
            if ((string.find(stdout, "Soft blocked: yes", nil, true) or 0) - 1) > 0 then
                widgetIconName = "bluetooth-off"
                tooltip.markup = "Bluetooth is off"
            else
                widgetIconName = "bluetooth"
                tooltip.markup = "Bluetooth is on"
            end
            icon:set_image(
                (tostring(widgetIconDir) .. tostring(widgetIconName)) .. ".svg"
            )
            collectgarbage("collect")
        end,
        image
    )
    return button
end
return ____exports
end,
["layout.components.systray-toggle"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local wibox = require("wibox")
local gears = require("gears")
local filesystem = require("gears.filesystem")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Image = ____base.Image
local Layout = ____base.Layout
local Margin = ____base.Margin
local ____panel = require("awesome.components.panel")
local SystemTray = ____panel.SystemTray
local ____panel_2Doutline = require("layout.panel-outline")
local PanelOutline = ____panel_2Doutline.PanelOutline
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local dpi = beautiful.xresources.apply_dpi
local configDir = filesystem.get_configuration_dir()
local widgetIconDir = tostring(configDir) .. "images/widgets/systray/"
____exports.SystemTrayToggle = function()
    local tray = wibox.widget(
        Awesome.createElement(
            SystemTray,
            {
                screen = "primary",
                base_size = dpi(20),
                horizontal = true
            }
        )
    )
    tray.visible = false
    local icon = wibox.widget(
        Awesome.createElement(
            Image,
            {
                id = "icon",
                image = tostring(widgetIconDir) .. "right-arrow.svg",
                resize = true
            }
        )
    )
    return Awesome.createElement(
        "fragment",
        {},
        Awesome.createElement(
            Margin,
            {
                top = dpi(10)
            },
            tray
        ),
        Awesome.createElement(
            PanelOutline,
            {},
            Awesome.createElement(
                Clickable,
                {
                    onButtonPress = function(button)
                        if button == 1 then
                            if tray.visible then
                                icon:set_image(
                                    gears.surface.load_uncached(
                                        tostring(widgetIconDir) .. "right-arrow.svg"
                                    )
                                )
                            else
                                icon:set_image(
                                    gears.surface.load_uncached(
                                        tostring(widgetIconDir) .. "left-arrow.svg"
                                    )
                                )
                            end
                            tray.visible = not tray.visible
                        end
                    end
                },
                Awesome.createElement(
                    Margin,
                    {
                        margins = dpi(7)
                    },
                    Awesome.createElement(Layout, {align = true, horizontal = true}, icon)
                )
            )
        )
    )
end
return ____exports
end,
["layout.components.task-list"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local ____panel = require("awesome.components.panel")
local TaskListPlain = ____panel.TaskList
local ____base = require("awesome.components.base")
local Background = ____base.Background
local Margin = ____base.Margin
local Image = ____base.Image
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local beautiful = require("beautiful")
local dpi = beautiful.xresources.apply_dpi
____exports.TaskList = function(____bindingPattern0)
    local screen
    screen = ____bindingPattern0.screen
    local selectedColor
    selectedColor = ____bindingPattern0.selectedColor
    local focus
    focus = ____bindingPattern0.focus
    local regular
    regular = ____bindingPattern0.regular
    return Awesome.createElement(
        TaskListPlain,
        {
            currenttags = true,
            screen = screen,
            onLeftClick = function(client) return (function(o, i, v)
                o[i] = v
                return v
            end)(client, "minimized", not client.minimized) end,
            task = Awesome.createElement(
                Clickable,
                {
                    create_callback = function(____self, client, index, objects)
                        local background = table.unpack(
                            ____self:get_children_by_id("tag-background")
                        )
                        if client.focus then
                            background:set_bg(selectedColor)
                        end
                        ____self:connect_signal(
                            "mouse::enter",
                            function()
                                if not client.focus then
                                    background:set_bg(focus)
                                end
                            end
                        )
                        ____self:connect_signal(
                            "mouse::leave",
                            function()
                                if not client.focus then
                                    background:set_bg(regular)
                                end
                            end
                        )
                        client:connect_signal(
                            "focus",
                            function()
                                background:set_bg(selectedColor)
                            end
                        )
                        client:connect_signal(
                            "unfocus",
                            function()
                                background:set_bg(regular)
                            end
                        )
                    end
                },
                Awesome.createElement(
                    Background,
                    {id = "tag-background", bg = regular},
                    Awesome.createElement(
                        Margin,
                        {
                            margins = dpi(6)
                        },
                        Awesome.createElement(Image, {id = "icon_role"})
                    )
                )
            )
        }
    )
end
return ____exports
end,
["layout.components.tag-list"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local ____panel = require("awesome.components.panel")
local TagListPlain = ____panel.TagList
local ____base = require("awesome.components.base")
local Background = ____base.Background
local Margin = ____base.Margin
local Text = ____base.Text
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local beautiful = require("beautiful")
local dpi = beautiful.xresources.apply_dpi
____exports.TagList = function(____bindingPattern0)
    local screen
    screen = ____bindingPattern0.screen
    local selectedColor
    selectedColor = ____bindingPattern0.selectedColor
    local focus
    focus = ____bindingPattern0.focus
    local regular
    regular = ____bindingPattern0.regular
    return Awesome.createElement(
        TagListPlain,
        {
            all = true,
            screen = screen,
            onLeftClick = function(tag) return tag:view_only() end,
            onScrollDown = function(tag) return awful.tag.viewprev(tag.screen) end,
            onScrollUp = function(tag) return awful.tag.viewnext(tag.screen) end,
            tag = Awesome.createElement(
                Clickable,
                {
                    create_callback = function(____self, tag, index, objects)
                        local background = table.unpack(
                            ____self:get_children_by_id("tag-background")
                        )
                        if tag.selected then
                            background:set_bg(selectedColor)
                        end
                        local text = table.unpack(
                            ____self:get_children_by_id("tag-index")
                        )
                        text:set_markup(
                            __TS__NumberToString(index, 10)
                        )
                        ____self:connect_signal(
                            "mouse::enter",
                            function()
                                if not tag.selected then
                                    background:set_bg(focus)
                                end
                            end
                        )
                        ____self:connect_signal(
                            "mouse::leave",
                            function()
                                if not tag.selected then
                                    background:set_bg(regular)
                                end
                            end
                        )
                        tag:connect_signal(
                            "property::selected",
                            function(tag)
                                background:set_bg((tag.selected and selectedColor) or regular)
                            end
                        )
                    end
                },
                Awesome.createElement(
                    Background,
                    {id = "tag-background", bg = regular},
                    Awesome.createElement(
                        Margin,
                        {
                            margins = dpi(6)
                        },
                        Awesome.createElement(Text, {id = "tag-index"})
                    )
                )
            )
        }
    )
end
return ____exports
end,
["layout.my-panel"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local Layout = ____base.Layout
local Margin = ____base.Margin
local ____config = require("configuration.config")
local config = ____config.default
local ____clock = require("layout.components.clock")
local Clock = ____clock.Clock
local ____layout_2Dstatus = require("layout.components.layout-status")
local LayoutStatus = ____layout_2Dstatus.LayoutStatus
local ____bluetooth = require("layout.components.bluetooth")
local Bluetooth = ____bluetooth.Bluetooth
local ____panel_2Doutline = require("layout.panel-outline")
local PanelOutline = ____panel_2Doutline.PanelOutline
local ____systray_2Dtoggle = require("layout.components.systray-toggle")
local SystemTrayToggle = ____systray_2Dtoggle.SystemTrayToggle
local ____task_2Dlist = require("layout.components.task-list")
local TaskList = ____task_2Dlist.TaskList
local ____tag_2Dlist = require("layout.components.tag-list")
local TagList = ____tag_2Dlist.TagList
local dpi = beautiful.xresources.apply_dpi
local militaryTime = config.militaryTime
local function Empty()
    return Awesome.createElement(Margin, {})
end
screen.connect_signal(
    "request::desktop_decoration",
    function(screen)
        local panel = awful.wibar(
            {
                position = "top",
                screen = screen,
                ontop = true,
                type = "dock",
                height = dpi(48),
                bg = "#00000066",
                fg = beautiful.fg_normal
            }
        )
        local font = "Inter Bold 11"
        local regular = "#00000033"
        local focus = "#ffffff66"
        local selectedColor = "#1B9AAA"
        panel:setup(
            Awesome.createElement(
                Margin,
                {
                    left = dpi(5),
                    right = dpi(5)
                },
                Awesome.createElement(
                    Layout,
                    {align = true, horizontal = true, expand = "none"},
                    Awesome.createElement(
                        Layout,
                        {fixed = true, horizontal = true},
                        Awesome.createElement(
                            PanelOutline,
                            {},
                            Awesome.createElement(TagList, {screen = screen, regular = regular, focus = focus, selectedColor = selectedColor})
                        ),
                        Awesome.createElement(
                            Margin,
                            {
                                left = dpi(5)
                            },
                            Awesome.createElement(
                                PanelOutline,
                                {},
                                Awesome.createElement(TaskList, {screen = screen, regular = regular, focus = focus, selectedColor = selectedColor})
                            )
                        )
                    ),
                    Awesome.createElement(Empty, {}),
                    Awesome.createElement(
                        Layout,
                        {
                            fixed = true,
                            horizontal = true,
                            spacing = dpi(5)
                        },
                        Awesome.createElement(SystemTrayToggle, {}),
                        Awesome.createElement(Bluetooth, {}),
                        Awesome.createElement(Clock, {font = font, militaryTime = militaryTime, screen = screen}),
                        Awesome.createElement(LayoutStatus, {screen = screen})
                    )
                )
            )
        )
        screen.myPanel = panel
    end
)
return ____exports
end,
["configuration.client.buttons"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local gears = require("gears")
local ____config = require("configuration.config")
local config = ____config.default
local modkey = config.modkey
____exports.default = gears.table.join(
    awful.button(
        {modkey},
        1,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
        end
    ),
    awful.button(
        {modkey},
        1,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client.move(client)
        end
    ),
    awful.button(
        {config.modkey},
        3,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client.resize(client)
        end
    )
)
return ____exports
end,
["configuration.client.keys"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local gears = require("gears")
local ____config = require("configuration.config")
local config = ____config.default
local modkey = config.modkey
____exports.default = gears.table.join(
    awful.key(
        {modkey},
        "f",
        function(c)
            c.fullscreen = not c.fullscreen
            c:raise()
        end,
        function()
        end,
        {description = "toggle fullscreen", group = "client"}
    ),
    awful.key(
        {modkey},
        "q",
        function(c)
            c:kill()
        end,
        function()
        end,
        {description = "kill window", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "space",
        function(client)
            client.floating = not client.floating
            client.ontop = false
            client:raise()
        end,
        function()
        end,
        {description = "toggle floating", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "Return",
        function(c)
            c:swap(
                awful.client:getmaster()
            )
        end,
        function()
        end,
        {description = "move to master", group = "client"}
    ),
    awful.key(
        {modkey},
        "o",
        function(c)
            c:move_to_screen()
        end,
        function()
        end,
        {description = "move to screen", group = "client"}
    ),
    awful.key(
        {modkey},
        "t",
        function(c)
            c.ontop = not c.ontop
        end,
        function()
        end,
        {description = "toggle keep on top", group = "client"}
    ),
    awful.key(
        {modkey},
        "n",
        function(c)
            c.minimized = true
        end,
        function()
        end,
        {description = "minimize", group = "client"}
    ),
    awful.key(
        {modkey},
        "m",
        function(c)
            c.maximized = not c.maximized
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "m",
        function(c)
            c.maximized_vertical = not c.maximized_vertical
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize vertically", group = "client"}
    ),
    awful.key(
        {modkey, "Shift"},
        "m",
        function(c)
            c.maximized_horizontal = not c.maximized_horizontal
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize horizontally", group = "client"}
    ),
    awful.key(
        {modkey},
        "p",
        function(c)
            if c.floating then
                c.ontop = false
                c.sticky = false
                c.floating = false
            else
                c.ontop = true
                c.sticky = true
                c.floating = true
                local ____ = c.screen.geometry
                local height = ____.height
                local newHeight = (1 / 3) * height
                local newWidth = (16 / 9) * ((1 / 3) * height)
                c:geometry({height = newHeight, width = newWidth})
                awful.placement.bottom_right(c, {margins = {bottom = 60}})
            end
        end,
        function()
        end,
        {description = "pin window", group = "client"}
    )
)
return ____exports
end,
["configuration.client.rules"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local ____buttons = require("configuration.client.buttons")
local client_buttons = ____buttons.default
local ____keys = require("configuration.client.keys")
local client_keys = ____keys.default
local rules = {
    {rule_any = {name = {"kitty"}}, properties = {skip_decoration = true}},
    {rule = {}, properties = {focus = awful.client.focus.filter, raise = true, keys = client_keys, buttons = client_buttons, screen = awful.screen.preferred, placement = awful.placement.no_offscreen, floating = false, maximized = false, above = false, below = false, ontop = false, sticky = false, maximized_horizontal = false, maximized_vertical = false}},
    {id = "dialog", rule_any = {type = {"dialog"}, class = {"Wicd-client.py", "calendar.google.com"}}, properties = {titlebars_enabled = true, floating = true, above = true, draw_backdrop = true, skip_decoration = true, placement = awful.placement.centered}},
    {rule_any = {type = {"normal", "dialog"}}, properties = {titlebars_enabled = true}},
    {
        rule_any = {class = {"Caja", "org.gnome.Nautilus", "Org.gnome.Nautilus", "gcr-prompter"}},
        properties = {
            focus = true,
            floating = true,
            above = true,
            callback = function(window)
                awful.placement.centered(window)
            end
        }
    },
    {
        rule_any = {class = {"Zoom"}, name = {"Chat"}},
        properties = {
            focus = true,
            floating = true,
            above = true,
            callback = function(window)
                awful.placement.centered(window)
            end
        }
    }
}
awful.rules.rules = rules
return ____exports
end,
["configuration.client.signals"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local beautiful = require("beautiful")
client.connect_signal(
    "manage",
    function(client)
        if (awesome.startup and (not client.size_hints.user_position)) and (not client.size_hints.program_position) then
            awful.placement.no_offscreen(client)
        end
    end
)
client.connect_signal(
    "mouse::enter",
    function(client)
        client:emit_signal("request::activate", "mouse_enter", {raise = false})
    end
)
client.connect_signal(
    "focus",
    function(client)
        client.border_color = beautiful.border_focus
    end
)
client.connect_signal(
    "unfocus",
    function(client)
        client.border_color = beautiful.border_normal
    end
)
client.connect_signal(
    "focus",
    function(client)
        client.border_color = beautiful.border_focus
    end
)
client.connect_signal(
    "unfocus",
    function(client)
        client.border_color = beautiful.border_normal
    end
)
return ____exports
end,
["configuration.client.index"] = function() require("lualib_bundle");
local ____exports = {}
require("configuration.client.rules")
require("configuration.client.signals")
return ____exports
end,
["theme.icons.index"] = function() require("lualib_bundle");
local ____exports = {}
local dir = tostring(
    os.getenv("HOME")
) .. "/.config/awesome/theme/icons/"
____exports.default = {
    web_browser = tostring(dir) .. ("tag-list/" .. "web-browser.svg"),
    text_editor = tostring(dir) .. ("tag-list/" .. "text-editor.svg"),
    social = tostring(dir) .. ("tag-list/" .. "social.svg"),
    file_manager = tostring(dir) .. ("tag-list/" .. "file-manager.svg"),
    multimedia = tostring(dir) .. ("tag-list/" .. "multimedia.svg"),
    games = tostring(dir) .. ("tag-list/" .. "games.svg"),
    development = tostring(dir) .. ("tag-list/" .. "development.svg"),
    sandbox = tostring(dir) .. ("tag-list/" .. "sandbox.svg"),
    terminal = tostring(dir) .. ("tag-list/" .. "terminal.svg"),
    graphics = tostring(dir) .. ("tag-list/" .. "graphics.svg"),
    menu = tostring(dir) .. ("tag-list/" .. "menu.svg"),
    close_small = tostring(dir) .. ("tag-list/" .. "close-small.svg"),
    close = tostring(dir) .. "close.svg",
    logout = tostring(dir) .. "logout.svg",
    sleep = tostring(dir) .. "power-sleep.svg",
    power = tostring(dir) .. "power.svg",
    lock = tostring(dir) .. "lock.svg",
    restart = tostring(dir) .. "restart.svg",
    search = tostring(dir) .. "magnify.svg",
    volume = tostring(dir) .. "volume-high.svg",
    brightness = tostring(dir) .. "brightness-7.svg",
    effects = tostring(dir) .. "effects.svg",
    chart = tostring(dir) .. "chart-areaspline.svg",
    memory = tostring(dir) .. "memory.svg",
    harddisk = tostring(dir) .. "harddisk.svg",
    thermometer = tostring(dir) .. "thermometer.svg",
    plus = tostring(dir) .. "plus.svg",
    batt_charging = tostring(dir) .. "battery-charge.svg",
    batt_discharging = tostring(dir) .. "battery-discharge.svg",
    toggled_on = tostring(dir) .. "toggled-on.svg",
    toggled_off = tostring(dir) .. "toggled-off.svg"
}
return ____exports
end,
["configuration.tags.index"] = function() require("lualib_bundle");
local ____exports = {}
local ____index = require("theme.icons.index")
local icons = ____index.default
local awful = require("awful")
local ____config = require("configuration.config")
local config = ____config.default
local beautiful = require("beautiful")
local gears = require("gears")
local apps = config.apps
local tags = {{icon = icons.web_browser, type = "internet", default_app = apps.default.browser, gap = beautiful.useless_gap}, {icon = icons.development, type = "code", default_app = apps.default.editor, gap = beautiful.useless_gap}, {icon = icons.file_manager, type = "files", gap = beautiful.useless_gap}, {icon = icons.terminal, type = "console", default_app = apps.default.terminal, gap = beautiful.useless_gap}, {icon = icons.social, type = "social", gap = beautiful.useless_gap}, {icon = icons.sandbox, type = "any", gap = beautiful.useless_gap}, {icon = icons.sandbox, type = "any", gap = beautiful.useless_gap}, {icon = icons.sandbox, type = "any", gap = beautiful.useless_gap}, {icon = icons.sandbox, type = "any", gap = beautiful.useless_gap}}
tag.connect_signal(
    "request::default_layouts",
    function()
        awful.layout.append_default_layouts(config.layouts)
    end
)
screen.connect_signal(
    "request::desktop_decoration",
    function(s)
        __TS__ArrayForEach(
            tags,
            function(____, tag, index)
                awful.tag.add(
                    tostring(index),
                    {icon = tag.icon, icon_only = true, layout = tag.layout or config.layouts[1], gap_single_client = true, gap = tag.gap, screen = s, selected = index == 1}
                )
            end
        )
    end
)
tag.connect_signal(
    "property::layout",
    function(tag)
        local current_layout = tag.layout
        if current_layout == awful.layout.suit.max then
            tag.gap = 0
            for ____, c in ipairs(
                __TS__ObjectValues(
                    tag:clients()
                )
            ) do
                if not c.floating then
                    c.shape = function(cr, width, height)
                        gears.shape.rectangle(cr, width, height)
                    end
                else
                    c.shape = function(cr, width, height)
                        gears.shape.rounded_rect(cr, width, height, beautiful.client_radius)
                    end
                end
            end
        else
            tag.gap = beautiful.useless_gap
            for ____, c in ipairs(
                __TS__ObjectValues(
                    tag:clients()
                )
            ) do
                if (not c.round_corners) or c.maximized then
                    c.shape = function(cr, width, height)
                        gears.shape.rectangle(cr, width, height)
                    end
                else
                    c.shape = function(cr, width, height)
                        gears.shape.rounded_rect(cr, width, height, beautiful.client_radius)
                    end
                end
            end
        end
    end
)
return ____exports
end,
["configuration.keys.global"] = function() require("lualib_bundle");
local ____exports = {}
local gears = require("gears")
local awful = require("awful")
local hotkeysPopup = require("awful.hotkeys_popup")
local ____config = require("configuration.config")
local config = ____config.default
local modkey = config.modkey
local function move_mouse_onto_focused_client()
    if client.focus then
        local client_to_focus = client.focus
        local geometry = client_to_focus:geometry()
        local x = geometry.x + (geometry.width / 2)
        local y = geometry.y + (geometry.height / 2)
        mouse:coords({x = x, y = y}, true)
    end
end
local globalkeys = gears.table.join(
    awful.key(
        {modkey},
        "s",
        hotkeysPopup.widget.show_help,
        function()
        end,
        {description = "show help", group = "awesome"}
    ),
    awful.key(
        {modkey},
        "Up",
        function()
            move_mouse_onto_focused_client()
        end,
        function()
        end,
        {description = "swap focus to top window", group = "client"}
    ),
    awful.key(
        {modkey},
        "Down",
        function()
            move_mouse_onto_focused_client()
        end,
        function()
        end,
        {description = "swap focus to bottom window", group = "client"}
    ),
    awful.key(
        {modkey},
        "Left",
        function()
            awful.tag.viewprev()
        end,
        function()
        end,
        {description = "swap focus to left window", group = "client"}
    ),
    awful.key(
        {modkey},
        "Right",
        function()
            awful.tag.viewnext()
        end,
        function()
        end,
        {description = "swap focus to right window", group = "client"}
    ),
    awful.key(
        {modkey},
        "j",
        function()
            awful.client.focus.byidx(1)
        end,
        function()
        end,
        {description = "focus next by index", group = "client"}
    ),
    awful.key(
        {modkey},
        "k",
        function()
            awful.client.focus.byidx(-1)
        end,
        function()
        end,
        {description = "focus previous by index", group = "client"}
    ),
    awful.key(
        {modkey, "Shift"},
        "j",
        function()
            awful.client.swap.byidx(1)
        end,
        function()
        end,
        {description = "swap with next client by index", group = "client"}
    ),
    awful.key(
        {modkey, "Shift"},
        "k",
        function()
            awful.client.swap.byidx(-1)
        end,
        function()
        end,
        {description = "swap with previous client by index", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "j",
        function()
            awful.screen.focus_relative(1)
        end,
        function()
        end,
        {description = "focus the next screen", group = "screen"}
    ),
    awful.key(
        {modkey, "Control"},
        "k",
        function()
            awful.screen.focus_relative(-1)
        end,
        function()
        end,
        {description = "focus the previous screen", group = "screen"}
    ),
    awful.key(
        {modkey},
        "Return",
        function()
            awful.spawn(config.apps.default.terminal)
        end,
        function()
        end,
        {description = "open a terminal", group = "launcher"}
    ),
    awful.key(
        {modkey, "Shift"},
        "s",
        function()
            awful.spawn(config.apps.default.screenshot)
        end,
        function()
        end,
        {description = "capture a screenshot", group = "launcher"}
    ),
    awful.key(
        {modkey, "Control"},
        "r",
        awesome.restart,
        function()
        end,
        {description = "reload awesome", group = "awesome"}
    ),
    awful.key(
        {modkey, "Shift"},
        "q",
        awesome.quit,
        function()
        end,
        {description = "quit awesome", group = "awesome"}
    ),
    awful.key(
        {modkey},
        "l",
        function()
            awful.spawn(config.apps.default.lock, false)
        end,
        function()
        end,
        {description = "lock the screen", group = "Utility"}
    ),
    awful.key(
        {modkey},
        "space",
        function()
            awful.layout.inc(1)
        end,
        function()
        end,
        {description = "select next", group = "layout"}
    ),
    awful.key(
        {modkey, "Shift"},
        "space",
        function()
            awful.layout.inc(-1)
        end,
        function()
        end,
        {description = "select previous", group = "layout"}
    ),
    awful.key(
        {modkey, "Control"},
        "n",
        function()
            local c = awful.client:restore()
            if c then
                c:emit_signal("request::activate", "key.unminimize", {raise = true})
            end
        end,
        function()
        end,
        {description = "restore minimized", group = "client"}
    ),
    awful.key(
        {modkey},
        "x",
        function()
        end,
        function()
        end,
        {description = "lua execute prompt", group = "awesome"}
    ),
    awful.key(
        {modkey},
        "d",
        function()
            awful.spawn(config.apps.default.rofiAppmenu, false)
        end,
        function()
        end,
        {description = "app launcher", group = "launcher"}
    ),
    awful.key(
        {modkey},
        "w",
        function()
            awful.spawn(config.apps.default.browser)
        end,
        function()
        end,
        {description = "launch browser", group = "apps"}
    ),
    awful.key(
        {modkey, "Shift"},
        "-",
        function()
            awful.spawn("pulsemixer --change-volume -5")
        end,
        function()
        end,
        {description = "decrease volume", group = "audio"}
    ),
    awful.key(
        {modkey, "Shift"},
        "=",
        function()
            awful.spawn("pulsemixer --change-volume +5")
        end,
        function()
        end,
        {description = "increase volume", group = "audio"}
    ),
    awful.key(
        {modkey, "Shift"},
        ",",
        function()
            awful.spawn("playerctl previous -p spotify")
        end,
        function()
        end,
        {description = "previous song", group = "audio"}
    ),
    awful.key(
        {modkey, "Shift"},
        ".",
        function()
            awful.spawn("playerctl next -p spotify")
        end,
        function()
        end,
        {description = "next song", group = "audio"}
    ),
    awful.key(
        {modkey, "Shift"},
        "p",
        function()
            awful.spawn("playerctl play-pause -p spotify")
        end,
        function()
        end,
        {description = "start/stop song", group = "audio"}
    )
)
for i = 1, 9 do
    globalkeys = gears.table.join(
        globalkeys,
        awful.key(
            {modkey},
            "#" .. tostring(i + 9),
            function()
                local screen = awful.screen.focused()
                local tag = screen.tags[i]
                if tag then
                    tag:view_only()
                end
            end,
            function()
            end,
            {
                description = "view tag #" .. tostring(i),
                group = "tag"
            }
        ),
        awful.key(
            {modkey, "Control"},
            "#" .. tostring(i + 9),
            function()
                local screen = awful.screen.focused()
                local tag = screen.tags[i]
                if tag then
                    awful.tag.viewtoggle(tag)
                end
            end,
            function()
            end,
            {
                description = "toggle tag #" .. tostring(i),
                group = "tag"
            }
        ),
        awful.key(
            {modkey, "Shift"},
            "#" .. tostring(i + 9),
            function()
                if client.focus then
                    local tag = client.focus.screen.tags[i]
                    if tag then
                        client.focus:move_to_tag(tag)
                    end
                end
            end,
            function()
            end,
            {
                description = "move focused client to tag #" .. tostring(i),
                group = "tag"
            }
        ),
        awful.key(
            {modkey, "Control", "Shift"},
            "#" .. tostring(i + 9),
            function()
                if client.focus then
                    local tag = client.focus.screen.tags[i]
                    if tag then
                    end
                end
            end,
            function()
            end,
            {
                description = "toggle focused client on tag #" .. tostring(i),
                group = "tag"
            }
        )
    )
end
____exports.default = globalkeys
return ____exports
end,
["helper.log"] = function() require("lualib_bundle");
local ____exports = {}
local ____naughty = require("naughty")
local notification = ____naughty.notification
local beautiful = require("beautiful")
____exports.log = function(message, opts)
    local ____ = opts or ({})
    local app_name = ____.app_name
    if app_name == nil then
        app_name = "AwesomeWM Log"
    end
    local title = ____.title
    if title == nil then
        title = "<b>Log from AwesomeWM</b>"
    end
    local timeout = ____.timeout
    if timeout == nil then
        timeout = 50
    end
    local icon = ____.icon
    if icon == nil then
        icon = beautiful.awesome_icon
    end
    notification({app_name = app_name, title = title, timeout = timeout, icon = icon, message = message})
end
return ____exports
end,
["module.auto-start"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local beautiful = require("beautiful")
local ____config = require("configuration.config")
local config = ____config.default
local ____log = require("helper.log")
local log = ____log.log
local function run_once(command)
    local firstSpace = (string.find(command, " ", nil, true) or 0) - 1
    local program = ((firstSpace >= 0) and __TS__StringSubstring(command, 0, firstSpace)) or command
    awful.spawn.easy_async_with_shell(
        ((("pgrep -u $USER -x " .. tostring(program)) .. " > /dev/null || (") .. tostring(command)) .. ")",
        function(stdout, stderr)
            if ((not stderr) or (stderr == "")) or (not config.debug) then
                return
            end
            log(stderr, {app_name = "Start-up Applications", title = "<b>Oof! Error detected when starting an application!</b>", timeout = 20, icon = beautiful.awesome_icon})
        end
    )
end
for ____, app in ipairs(config.apps.startUp) do
    run_once(app)
end
return ____exports
end,
["module.titlebar"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local awful = require("awful")
local gears = require("gears")
local beautiful = require("beautiful")
local ____base = require("awesome.components.base")
local CloseButton = ____base.CloseButton
local FloatingButton = ____base.FloatingButton
local Layout = ____base.Layout
local Margin = ____base.Margin
local MaximizedButton = ____base.MaximizedButton
local MinimizeButton = ____base.MinimizeButton
local OnTopButton = ____base.OnTopButton
local dpi = beautiful.xresources.apply_dpi
local timer
local function double_click_event_handler(handle)
    if timer then
        timer:stop()
        timer = nil
        handle()
    end
    timer = gears.timer.start_new(
        0.2,
        function()
            timer = nil
            return false
        end
    )
end
local function create_horizontal_bar(client, buttons, pos, bg, size)
    awful.titlebar(client, {position = pos, bg = bg, size = size}):setup(
        Awesome.createElement(
            Layout,
            {align = true, horizontal = true},
            Awesome.createElement(
                Margin,
                {
                    margins = dpi(10)
                },
                Awesome.createElement(
                    Layout,
                    {
                        fixed = true,
                        horizontal = true,
                        spacing = dpi(7)
                    },
                    Awesome.createElement(OnTopButton, {client = client}),
                    Awesome.createElement(FloatingButton, {client = client})
                )
            ),
            Awesome.createElement(Layout, {flex = true, horizontal = true, buttons = buttons}),
            Awesome.createElement(
                Margin,
                {
                    margins = dpi(10)
                },
                Awesome.createElement(
                    Layout,
                    {
                        fixed = true,
                        horizontal = true,
                        spacing = dpi(7)
                    },
                    Awesome.createElement(MinimizeButton, {client = client}),
                    Awesome.createElement(MaximizedButton, {client = client}),
                    Awesome.createElement(CloseButton, {client = client})
                )
            )
        )
    )
end
client.connect_signal(
    "request::titlebars",
    function(client)
        local buttons = gears.table.join(
            awful.button(
                {},
                1,
                function()
                    double_click_event_handler(
                        function()
                            if client.floating then
                                client.floating = false
                                return
                            end
                            client.maximized = not client.maximized
                            client:raise()
                        end
                    )
                    client:emit_signal("request::activate", "titlebar", {action = "mouse_move"})
                end
            ),
            awful.button(
                {},
                3,
                function()
                    client:emit_signal("request::activate", "titlebar", {action = "mouse_resize"})
                end
            )
        )
        if (client.class == "XTerm") or (client.class == "UXTerm") then
            create_horizontal_bar(
                client,
                buttons,
                "top",
                beautiful.xresources.get_current_theme().background,
                beautiful.titlebar_size
            )
        elseif client.class == "Nemo" then
            create_horizontal_bar(
                client,
                buttons,
                "top",
                beautiful.gtk.get_theme_variables().bg_color,
                beautiful.titlebar_size
            )
        elseif client.type == "normal" then
            create_horizontal_bar(client, buttons, "top", "#000000AA", beautiful.titlebar_size)
        elseif (client.type == "dialog") or (client.type == "modal") then
            create_horizontal_bar(client, buttons, "top", "#000000AA", beautiful.titlebar_size)
        else
            create_horizontal_bar(client, buttons, "top", "#000000AA", beautiful.titlebar_size)
        end
    end
)
return ____exports
end,
["module.notifications"] = function() require("lualib_bundle");
local ____exports = {}
local ____jsx = require("awesome.jsx")
local Awesome = ____jsx.default
local gears = require("gears")
local wibox = require("wibox")
local awful = require("awful")
local ruled = require("ruled")
local beautiful = require("beautiful")
local naughty = require("naughty")
local ____base = require("awesome.components.base")
local Background = ____base.Background
local Constraint = ____base.Constraint
local Layout = ____base.Layout
local Margin = ____base.Margin
local NaughtyIcon = ____base.NaughtyIcon
local NaughtyMessage = ____base.NaughtyMessage
local NaughtyTitle = ____base.NaughtyTitle
local Text = ____base.Text
local ____clickable_2Dcontainer = require("widgets.clickable-container")
local Clickable = ____clickable_2Dcontainer.Clickable
local dpi = beautiful.xresources.apply_dpi
naughty.config.defaults.ontop = true
naughty.config.defaults.icon_size = dpi(32)
naughty.config.defaults.timeout = 5
naughty.config.defaults.title = "System Notification"
naughty.config.defaults.margin = dpi(16)
naughty.config.defaults.border_width = 0
naughty.config.defaults.position = "top_left"
naughty.config.defaults.shape = function(cr, w, h)
    gears.shape.rounded_rect(
        cr,
        w,
        h,
        dpi(6)
    )
end
naughty.config.padding = dpi(8)
naughty.config.spacing = dpi(8)
naughty.config.icon_dirs = {"/usr/share/icons/Tela", "/usr/share/icons/Tela-blue-dark", "/usr/share/icons/Papirus/", "/usr/share/icons/la-capitaine-icon-theme/", "/usr/share/icons/gnome/", "/usr/share/icons/hicolor/", "/usr/share/pixmaps/"}
naughty.config.icon_formats = {"svg", "png", "jpg", "gif"}
ruled.notification.connect_signal(
    "request::rules",
    function()
        ruled.notification.append_rule(
            {
                rule = {urgency = "critical"},
                properties = {
                    font = "Inter Bold 10",
                    bg = "#ff0000",
                    fg = "#ffffff",
                    margin = dpi(16),
                    position = "top_left",
                    implicit_timeout = 0
                }
            }
        )
        ruled.notification.append_rule(
            {
                rule = {urgency = "normal"},
                properties = {
                    font = "Inter Bold 10",
                    bg = beautiful.transparent,
                    fg = beautiful.fg_normal,
                    margin = dpi(16),
                    position = "top_left",
                    implicit_timeout = 5
                }
            }
        )
        ruled.notification.append_rule(
            {
                rule = {urgency = "low"},
                properties = {
                    font = "Inter Bold 10",
                    bg = beautiful.transparent,
                    fg = beautiful.fg_normal,
                    margin = dpi(16),
                    position = "top_left",
                    implicit_timeout = 5
                }
            }
        )
    end
)
naughty.connect_signal(
    "request::display_error",
    function(message, startup)
        naughty.notification(
            {
                urgency = "critical",
                title = "Oops, an error happened" .. tostring((startup and " during startup!") or "!"),
                message = message,
                app_name = "System Notification",
                icon = beautiful.awesome_icon
            }
        )
    end
)
local function Place(____bindingPattern0)
    local children
    children = ____bindingPattern0.children
    return Awesome.createElement("base", {widget = wibox.container.place}, children)
end
naughty.connect_signal(
    "request::icon",
    function(n, context, hints)
        if context ~= "app_icon" then
            return
        end
    end
)
naughty.connect_signal(
    "request::display",
    function(n)
        local actions = wibox.widget(
            {
                notification = n,
                style = {underline_normal = false, underline_selected = true},
                widget = naughty.list.actions,
                base_layout = wibox.widget(
                    Awesome.createElement(
                        Layout,
                        {
                            flex = true,
                            horizontal = true,
                            spacing = dpi(0)
                        }
                    )
                ),
                widget_template = Awesome.createElement(
                    Margin,
                    {
                        margins = dpi(4)
                    },
                    Awesome.createElement(
                        Background,
                        {
                            bg = beautiful.groups_bg,
                            shape = gears.shape.rounded_rect,
                            forced_height = dpi(30)
                        },
                        Awesome.createElement(
                            Clickable,
                            {},
                            Awesome.createElement(
                                Place,
                                {},
                                Awesome.createElement(Text, {id = "text_role", font = "Inter Regular 10"})
                            )
                        )
                    )
                )
            }
        )
        naughty.layout.box(
            {
                notification = n,
                type = "notification",
                screen = awful.screen.preferred(),
                shape = gears.shape.rectangle,
                widget_template = Awesome.createElement(
                    Background,
                    {bg = beautiful.background, shape = gears.shape.rounded_rect},
                    Awesome.createElement(
                        Constraint,
                        {
                            strategy = "max",
                            height = dpi(250),
                            width = dpi(250)
                        },
                        Awesome.createElement(
                            Constraint,
                            {
                                strategy = "min",
                                width = dpi(250)
                            },
                            Awesome.createElement(
                                Background,
                                {id = "background_role", bg = beautiful.transparent},
                                Awesome.createElement(
                                    Layout,
                                    {
                                        fixed = true,
                                        vertical = true,
                                        spacing = dpi(4)
                                    },
                                    Awesome.createElement(
                                        Margin,
                                        {
                                            margins = dpi(0)
                                        },
                                        Awesome.createElement(
                                            Layout,
                                            {fixed = true, vertical = true, fill_space = true},
                                            Awesome.createElement(
                                                Background,
                                                {bg = beautiful.background},
                                                Awesome.createElement(
                                                    Margin,
                                                    {margins = beautiful.notification_margin},
                                                    Awesome.createElement(
                                                        Text,
                                                        {markup = true, font = "Inter Bold 10", align = "center", valign = "center"},
                                                        (function(____lhs)
                                                            if ____lhs == nil then
                                                                return "System Notification"
                                                            else
                                                                return ____lhs
                                                            end
                                                        end)(n.app_name)
                                                    )
                                                )
                                            ),
                                            Awesome.createElement(
                                                Layout,
                                                {fixed = true, horizontal = true},
                                                Awesome.createElement(
                                                    Margin,
                                                    {margins = beautiful.notification_margin},
                                                    Awesome.createElement(NaughtyIcon, {resize_strategy = "center"})
                                                ),
                                                Awesome.createElement(
                                                    Margin,
                                                    {margins = beautiful.notification_margin},
                                                    Awesome.createElement(
                                                        Layout,
                                                        {align = true, vertical = true, expand = "none"},
                                                        Awesome.createElement(
                                                            Layout,
                                                            {fixed = true, vertical = true},
                                                            Awesome.createElement(NaughtyTitle, {align = "left"}),
                                                            Awesome.createElement(NaughtyMessage, {align = "left"})
                                                        )
                                                    )
                                                )
                                            ),
                                            actions
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            }
        )
    end
)
return ____exports
end,
["rc"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local beautiful = require("beautiful")
local ____index = require("theme.index")
local theme = ____index.default
require("layout.my-panel")
require("configuration.client.index")
require("configuration.tags.index")
local ____global = require("configuration.keys.global")
local globalKeys = ____global.default
require("module.auto-start")
require("module.titlebar")
require("module.notifications")
awful.util.shell = "sh"
beautiful.init(theme)
root.keys(globalKeys)
return ____exports
end,
["awesome.components.test"] = function() require("lualib_bundle");
end,
["configuration.keys.client"] = function() require("lualib_bundle");
local ____exports = {}
local awful = require("awful")
local gears = require("gears")
local ____config = require("configuration.config")
local config = ____config.default
local modkey = config.modkey
local clientbuttons = gears.table.join(
    awful.button(
        {},
        1,
        function(c)
            c:emit_signal("request::activate", "mouse_click", {raise = true})
        end
    ),
    awful.button(
        {modkey},
        1,
        function(c)
            c:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client.move(c)
        end
    ),
    awful.button(
        {modkey},
        3,
        function(c)
            c:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client.resize(c)
        end
    )
)
local clientkeys = gears.table.join(
    awful.key(
        {modkey},
        "f",
        function(c)
            c.fullscreen = not c.fullscreen
            c:raise()
        end,
        function()
        end,
        {description = "toggle fullscreen", group = "client"}
    ),
    awful.key(
        {modkey},
        "q",
        function(c)
            c:kill()
        end,
        function()
        end,
        {description = "kill window", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "space",
        function()
            awful.client.floating = not awful.client.floating
        end,
        function()
        end,
        {description = "toggle floating", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "Return",
        function(c)
            c:swap(
                awful.client:getmaster()
            )
        end,
        function()
        end,
        {description = "move to master", group = "client"}
    ),
    awful.key(
        {modkey},
        "o",
        function(c)
            c:move_to_screen()
        end,
        function()
        end,
        {description = "move to screen", group = "client"}
    ),
    awful.key(
        {modkey},
        "t",
        function(c)
            c.ontop = not c.ontop
        end,
        function()
        end,
        {description = "toggle keep on top", group = "client"}
    ),
    awful.key(
        {modkey},
        "n",
        function(c)
            c.minimized = true
        end,
        function()
        end,
        {description = "minimize", group = "client"}
    ),
    awful.key(
        {modkey},
        "m",
        function(c)
            c.maximized = not c.maximized
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "m",
        function(c)
            c.maximized_vertical = not c.maximized_vertical
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize vertically", group = "client"}
    ),
    awful.key(
        {modkey, "Shift"},
        "m",
        function(c)
            c.maximized_horizontal = not c.maximized_horizontal
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize horizontally", group = "client"}
    ),
    awful.key(
        {modkey},
        "p",
        function(c)
            if c.floating then
                c.ontop = false
                c.sticky = false
                c.floating = false
            else
                c.ontop = true
                c.sticky = true
                c.floating = true
            end
        end,
        function()
        end,
        {description = "pin window", group = "client"}
    )
)
____exports.default = {clientbuttons = clientbuttons, clientkeys = clientkeys}
return ____exports
end,
["configuration.root.index"] = function() require("lualib_bundle");
local ____exports = {}
return ____exports
end,
["typing.index"] = function() require("lualib_bundle");
end,
}
return require("rc")
